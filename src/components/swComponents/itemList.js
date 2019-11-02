import React from "react";
import { ViewComponent, WithSwapiService } from "../HOС";
import ItemList from "../ItemList";

const withChildFuncrion = fn => Wrapped => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

let compose = (...arr) => item =>
  arr.reduceRight((val, f) => {
    return f(val);
  }, item);

const renderName = ({ name }) => <span>{name}</span>;

const ListWithChildren = withChildFuncrion(renderName)(ItemList);

const mapPeopleMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
});
const mapStarshipMethodToProps = swapiService => ({
  getData: swapiService.getAllStarships
});
const mapPlanetMethodToProps = swapiService => ({
  getData: swapiService.getAllPlanets
});

const PeopleList = WithSwapiService(mapPeopleMethodToProps)(
  ViewComponent(ListWithChildren)
);
const StarshipList = WithSwapiService(mapStarshipMethodToProps)(
  ViewComponent(ListWithChildren)
);
const PlanetList = compose(WithSwapiService(mapPlanetMethodToProps),ViewComponent)(ListWithChildren)

export { PeopleList, StarshipList, PlanetList };
