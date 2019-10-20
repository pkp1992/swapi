import React, { Component } from "react";
import "./App.css";
import SwapiRequest from "../../services";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorIndicater from "../ErrorIndicater";
import PeoplePage from "../PeoplePage";
import ViewRow from "../ViewRow";
import ItemDetails, { Record } from "../ItemDetails";
import {PeopleList , StarshipList, PlanetList} from '../swComponents'
import ItemList from "../ItemList";

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
    // const personDetails = (
    //   <ItemDetails getData={getPeople} itemId={11} getImageUrl={getPeopleImage}>
    //     <Record field="gender" lable="Gender"></Record>
    //     <Record field="birthYear" lable="Birth Year"></Record>
    //     <Record field="eyeColor" lable="Eye Color"></Record>
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     getData={getStarships}
    //     itemId={5}
    //     getImageUrl={getStarshipImage}
    //   >
    //     <Record field="model" lable="Model"></Record>
    //     <Record field="length" lable="Length"></Record>
    //     <Record field="costInCredits" lable="Cost"></Record>
    //   </ItemDetails>
    // );

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
