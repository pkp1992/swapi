import React, { Component } from "react";
import "./App.css";
import SwapiRequest from "../../services";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorIndicater from "../ErrorIndicater";
import PeoplePage from "../PeoplePage";
import ViewRow from "../ViewRow";
import ItemDetails from "../ItemDetails";

export default class App extends Component {
  swapiService = new SwapiRequest();
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      getPeople,
      getStarships,
      getPeopleImage,
      getStarshipImage
    } = this.swapiService;
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    const personDetails = (
      <ItemDetails
        getData={getPeople}
        itemId={11}
        getImageUrl={getPeopleImage}
      ></ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        getData={getStarships}
        itemId={5}
        getImageUrl={getStarshipImage}
      ></ItemDetails>
    );

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}
        <ViewRow left={personDetails} right={starshipDetails}></ViewRow>
      </div>
    );
  }
}
