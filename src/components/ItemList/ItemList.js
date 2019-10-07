import React, { Component } from "react";
import "./ItemList.css";
import SwapiRequest from "../../services/";
import Spinner from "../Spinner";
export default class ItemList extends Component {
  swapiService = new SwapiRequest();
  state = {
    peopleList: null,
    list: ["Ivan", "luck", "Some"],
    loading: true,
    id: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.onloadPeople(peopleList));
  }
  onloadPeople = peopleList => {
    this.setState({ peopleList });
  };


  renderItem = arr => {
    return arr.map(({name, id}) => {
      return (
        <li key={id} onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }
    const items = this.renderItem(peopleList)

    return (
      <div className="list">
        <ul>{items}</ul>
      </div>
    );
  }
}
