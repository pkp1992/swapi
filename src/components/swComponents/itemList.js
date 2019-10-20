import React, { Component } from "react";
import ViewComponent from "../HOС";
import ItemList from "../ItemList";
import SwapiRequest from "../../services/";

const swapiService = new SwapiRequest();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const withChildFuncrion = (Wrapped, fn) => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

const renderName = ({ name }) => <span>{name}</span>;

const ListWithChildren = withChildFuncrion(ItemList, renderName)

const PeopleList = ViewComponent(ListWithChildren, getAllPeople);
const StarshipList = ViewComponent(ListWithChildren, getAllStarships);
const PlanetList = ViewComponent(ListWithChildren, getAllPlanets);

export { PeopleList, StarshipList, PlanetList };
