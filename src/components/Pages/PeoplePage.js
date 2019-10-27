import React, { Component } from "react";
import ViewRow from "../ViewRow";
import { PeopleList, PeopleDetails } from "../swComponents";

export default class PeoplePage extends Component {
  state = {
    itemId: null
  };
  onItemSelected = itemId => {
    this.setState({ itemId });
  };
  render() {
    return (
      <ViewRow
        left={<PeopleList onItemSelected={this.onItemSelected} />}
        right={<PeopleDetails itemId={this.state.itemId} />}
      ></ViewRow>
    );
  }
}
