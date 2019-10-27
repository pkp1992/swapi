import React from "react";
import { ViewComponent, WithSwapiService } from "../HOС";
import ItemList from "../ItemList";

const withChildFuncrion = (Wrapped, fn) => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

const renderName = ({ name }) => <span>{name}</span>;

const ListWithChildren = withChildFuncrion(ItemList, renderName);

const mapPeopleMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
}); 
const mapStarshipMethodToProps = swapiService => ({
  getData: swapiService.getAllStarships
}); 
const mapPlanetMethodToProps = swapiService => ({
  getData: swapiService.getAllPlanets
}); 


const PeopleList = WithSwapiService(
  ViewComponent(ListWithChildren),
  mapPeopleMethodToProps
);
const StarshipList = WithSwapiService(
  ViewComponent(ListWithChildren),
  mapStarshipMethodToProps
);
const PlanetList = WithSwapiService(
  ViewComponent(ListWithChildren),
  mapPlanetMethodToProps
);

export { PeopleList, StarshipList, PlanetList };
