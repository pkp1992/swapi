import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import { WithSwapiService } from "../HOС";
const PeopleDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" lable="Gender"></Record>
      <Record field="birthYear" lable="Birth Year"></Record>
      <Record field="eyeColor" lable="Eye Color"></Record>
    </ItemDetails>
  );
};

const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getPeople,
    getImageUrl: swapiService.getPeopleImage
  };
};

export default WithSwapiService(PeopleDetails, mapMethodToProps);
