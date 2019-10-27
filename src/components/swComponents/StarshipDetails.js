import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import { WithSwapiService } from "../HOС";

const StarshipDetails = (props) => {
  return (
        <ItemDetails {...props}>
          <Record field="model" lable="Model"></Record>
          <Record field="length" lable="Length"></Record>
          <Record field="costInCredits" lable="Cost"></Record>
        </ItemDetails>
  );
};


const mapMethodToProps = swapiService => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage
});

export default WithSwapiService(StarshipDetails, mapMethodToProps);