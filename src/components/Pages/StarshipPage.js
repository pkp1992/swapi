import React from "react";
import { StarshipList } from "../swComponents";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={id => {
        history.push(id);
      }}
    />
  );
};

export default withRouter(StarshipPage);
