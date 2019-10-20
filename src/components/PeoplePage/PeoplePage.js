import React, { Component } from "react";
import "./PeoplePage.css";
import ErrorIndicater from "../ErrorIndicater";
import SwapiRequest from "../../services";
import ViewRow from "../ViewRow";
import ErrorBoundry from "../ErrorBoundry";
import { PeopleList, PeopleDetails } from "../swComponents";

export default class PeoplePage extends Component {
  swapiService = new SwapiRequest();
  state = {
    selectedItem: null
  };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };
  render() {
    const itemList = (
      <ErrorBoundry>
        <PeopleList onItemSelected = {this.onItemSelected} />
      </ErrorBoundry>
    );
    const itemDetail = (
      <ErrorBoundry>
        <PeopleDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );
    
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    return <ViewRow left={itemList} right={itemDetail} />;
  }
}
