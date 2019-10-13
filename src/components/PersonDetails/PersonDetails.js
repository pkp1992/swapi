import React, { Component, Fragment } from "react";
import "./PersonDetails.css";
import SwapiRequest from "../../services";
import Spinner from "../Spinner/";
import ErrorIndicater from "../ErrorIndicater";

export default class PersonDetails extends Component {
  swapi = new SwapiRequest();
  state = {
    person: null,
    loading: false,
    errorIndicator: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.updatePerson();
  }
  onError = err => {
    this.setState({ errorIndicator: true, loading: false });
  };

  updatePerson = () => {
    const { personId } = this.props;
    this.setState({loading: true})
    if (!personId) {
      return;
    }
    this.swapi
      .getPeople(personId)
      .then(person => this.setState({ person, loading: false, errorIndicator: false}))
      .catch(this.onError);
  };


  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  render() {
    const { loading, errorIndicator, person } = this.state;
    if (!person) {
      return (
        <div className="single">
          {errorIndicator ? (
            <ErrorIndicater className="errorImg" />
          ) : (
            <span>Select a peroson from a list</span>
          )}
        </div>
      );
    }
    const hasData = !(loading || errorIndicator);
    const hasError = !loading && errorIndicator;
    const loader = loading ? <Spinner /> : null;
    const data = hasData ? <Person person={person} /> : null;
    const error = hasError ? <ErrorIndicater/> : null;
    return (
      <div className="single">
        {loader}
        {data}
        {error}
      </div>
    );
  }
}

class Person extends Component {
  render() {
    const { id, name, gender, birthYear, eyeColor } = this.props.person;
    return (
      <Fragment>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
        />
        <div className="single_discription">
          <h2>{name}</h2>
          <ul>
            <li>
              <span>Gender: </span>
              <span>{gender}</span>
            </li>
            <li>
              <span>Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li>
              <span>Eye Color: </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
