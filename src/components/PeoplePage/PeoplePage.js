import React, { Component, Fragment } from "react";
import "./PeoplePage.css";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicater from "../ErrorIndicater";
// import ErrorButton from "../ErrorButton";
import SwapiRequest from '../../services'

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
    if (this.state.hasError) {
      return <ErrorIndicater />;
    }
    return (
      <Fragment>
        <div className="main">
          <div className="main_block">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPeople}
              renderItem={({ name, gender, birthYear }) =>
                `${name} (${gender}, ${birthYear})`
              }
            />
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </Fragment>
    );
  }
}
