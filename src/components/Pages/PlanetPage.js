import React, { Component } from "react";
import ViewRow from "../ViewRow";
import { PlanetList, PlanetDetails } from "../swComponents";

export default class PlanetPage extends Component {
  state = {
    itemId: null
  };
  onItemSelected = (itemId) => {
      this.setState({itemId})
  };
  render(){
      return (
        <ViewRow
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={this.state.itemId} />}
        ></ViewRow>
      );
  }
}
