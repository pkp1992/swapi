import React, { Component } from "react";
import "./App.css";
// import SwapiRequest from '../../services'
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
// import PlanetDetails from "../PlanetDetails";
import PersonDetails from "../PersonDetails";

export default class App extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="main">
          <ItemList onItemSelected={this.onPersonSelected} />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
