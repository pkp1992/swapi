import React, { Component } from "react";
import ViewRow from "../ViewRow";
import { StarshipList, StarshipDetails } from "../swComponents";

export default class StarshipPage extends Component {
  state = {
    itemId: null
  };
  onItemSelected = itemId => {
    this.setState({ itemId });
  };
  render() {
    return (
      <ViewRow
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={this.state.itemId} />}
      ></ViewRow>
    );
  }
}
