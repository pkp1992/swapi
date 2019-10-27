import React, { Component } from "react";
import "./App.css";
import SwapiRequest from "../../services";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorIndicater from "../ErrorIndicater";
import { SwapiserviceProvider } from "../SwapiServiceContext";
import { PlanetPage, StarshipPage, PeoplePage } from "../Pages";
import ErrorBoundry from "../ErrorBoundry";

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
      <ErrorBoundry>
        <SwapiserviceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiserviceProvider>
      </ErrorBoundry>
    );
  }
}

