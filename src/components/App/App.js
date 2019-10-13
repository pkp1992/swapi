import React, { Component } from "react";
import "./App.css";
import SwapiRequest from "../../services";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
// import PlanetDetails from "../PlanetDetails";
import PersonDetails from "../PersonDetails";
import ErrorIndicater from "../ErrorIndicater";
import PeoplePage from "../PeoplePage";

export default class App extends Component {
  swapiService = new SwapiRequest();
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  // onPersonSelected = id => {
  //   this.setState({ selectedPerson: id });
  // };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <div className="main">
          <div className="main_block">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={({name, model}) => `${name} (${model})`}
            />
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        <div className="main">
          <div className="main_block">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanet}
              renderItem={(item) => item.name}
            />
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
