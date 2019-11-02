import React, { Component, Fragment } from "react";
import "./RandomPlanet.css";
import SwapiRequest from "../../services";
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";
import PropTypes from "prop-types";

export default class RandomPlanet extends Component {
  swapi = new SwapiRequest();
  static defaultProps = {
    updateInterval: 10000
  };
  static propTypes = {
    updateInterval: PropTypes.number
  };

  // static propTypes = {
  //   updateInterval: (props, propName, componentName) => {
  //     if (typeof props[propName] === "number" && !isNaN(props[propName])) {
  //       return null;
  //     }
  //     return new TypeError(`In ${componentName} in ${propName} we expected number`);
  //   }
  // }

  state = {
    id: null,
    planet: {},
    loading: true,
    error: false
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  componentDidMount() {
    this.updatePlanet();
    // this.intervalUpdatePlanet = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalUpdatePlanet);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 21) + 3;
    this.setState({ id: id, loading: true });
    this.swapi
      .getPlanet(id)
      .then(planet => this.onPlanetLoaded(planet))
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicater /> : null;
    return (
      <Fragment>
        <div className="wrap">
          <div className="random_planet">
            {errorMessage}
            {spinner}
            {content}
          </div>
          <button className="togglePlanet" onClick={this.updatePlanet}>
            Toggle Random Planet
          </button>
        </div>
      </Fragment>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;

  return (
    <Fragment>
      <div className="random_planet_wrap">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={name}
        />
        <div className="discripton_planet">
          <h2>{name}</h2>
          <ul>
            <li>
              <span>Population: </span>
              <span>{population}</span>
            </li>
            <li>
              <span>Rotation period: </span>
              <span>{rotationPeriod}</span>
            </li>
            <li>
              <span>Diametr: </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
