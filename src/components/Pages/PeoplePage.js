import React from "react";
import { PeopleList} from "../swComponents";
import {withRouter} from "react-router-dom";

const PeoplePage = ({history}) => {
  return <PeopleList onItemSelected={id => {
    history.push(id)
  }} />;
};

export default withRouter(PeoplePage);
