import React, { Component } from "react";
import SwapiRequest from "../../services/";
import ItemDetails, {Record} from "../ItemDetails";

const swapiService = new SwapiRequest();
const {
  getPeople,
  getStarship,
  getPlanet,
  getPeopleImage,
  getStarshipImage,
  getPlanetImage
} = swapiService;

const PeopleDetails = ({itemId}) => {
    return (
      <ItemDetails
        getData={getPeople}
        itemId={itemId}
        getImageUrl={getPeopleImage}
      >
        <Record field="gender" lable="Gender"></Record>
        <Record field="birthYear" lable="Birth Year"></Record>
        <Record field="eyeColor" lable="Eye Color"></Record>
      </ItemDetails>
    );
};
const StarshipDetails = () => ({itemId}) => {
    return (
      <ItemDetails
        getData={getStarship}
        itemId={itemId}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" lable="Model"></Record>
        <Record field="length" lable="Length"></Record>
        <Record field="costInCredits" lable="Cost"></Record>
      </ItemDetails>
    );
}
const PlanetDetails = () => ({itemId}) => {
    return (
      <ItemDetails
        getData={getPlanet}
        itemId={itemId}
        getImageUrl={getPlanetImage}
      >
        <Record field="model" lable="Model"></Record>
        <Record field="length" lable="Length"></Record>
        <Record field="costInCredits" lable="Cost"></Record>
      </ItemDetails>
    );
}


export { PeopleDetails, StarshipDetails, PlanetDetails };
