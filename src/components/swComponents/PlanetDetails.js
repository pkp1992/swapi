import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import { WithSwapiService } from "../HOС";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" lable="Name"></Record>
      <Record field="population" lable="Population"></Record>
      <Record field="diameter" lable="Diameter"></Record>
    </ItemDetails>
  );
};

const mapMethodToProps = swapiService => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage
});

export default WithSwapiService(PlanetDetails, mapMethodToProps);
