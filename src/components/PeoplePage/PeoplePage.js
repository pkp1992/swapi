import React, { Component } from "react";
import "./PeoplePage.css";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import ErrorIndicater from "../ErrorIndicater";
import SwapiRequest from "../../services";
import ViewRow from "../ViewRow";
import ErrorButton from "../ErrorButton";
import ErrorBoundry from "../ErrorBoundry";



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
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
        >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
        <ErrorButton></ErrorButton>
    </ErrorBoundry>
    );
    const ItemDetail = <ItemDetails itemId={this.state.selectedItem} />;
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    return <ViewRow left={itemList} right={ItemDetail} />;
  }
}
