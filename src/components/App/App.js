import React, { Component } from "react";
import "./App.css";
import SwapiRequest from "../../services";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorIndicater from "../ErrorIndicater";
import PeoplePage from "../PeoplePage";
import ViewRow from "../ViewRow";
import {
  PeopleList,
  PeopleDetails,
  StarshipList,
  PlanetList,
  StarshipDetails,
  PlanetDetails
} from "../swComponents";

export default class App extends Component {
  swapiService = new SwapiRequest();
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <ViewRow
          left={<StarshipList />}
          right={<StarshipDetails itemId={5} />}
        ></ViewRow>
        <ViewRow
          left={<PlanetList />}
          right={<PlanetDetails itemId={5} />}
        ></ViewRow>
      </div>
    );
  }
}
