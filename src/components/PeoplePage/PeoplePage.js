import React, { Component, Fragment } from "react";
import "./PeoplePage.css";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicater from "../ErrorIndicater";
// import ErrorButton from "../ErrorButton";
import SwapiRequest from "../../services";

const Row = ({ left, right }) => (
  <div className="main">
    <div className="main_block">
      {left}
      {right}
    </div>
  </div>
);

export default class PeoplePage extends Component {
  swapiService = new SwapiRequest();
  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    return (
      <Fragment>
        <Row left={itemList} right={personDetails} />
        <Row left="Foo" right="Bar" />
      </Fragment>
    );
  }
}
