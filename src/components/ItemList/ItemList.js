import React, { Component } from "react";
import "./ItemList.css";
import SwapiRequest from "../../services/";
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";
export default class ItemList extends Component {
  swapiService = new SwapiRequest();
  state = {
    peopleList: [],
    loading: true,
    id: null,
    errorIndicator: false
  };

  onError = () => {
    this.setState({ errorIndicator: true, loading: false });
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.onloadPeople(peopleList))
      .catch(this.onError);
  }
  onloadPeople = peopleList => {
    this.setState({ peopleList, loading: false });
  };
  renderItem = arr => {
    return arr.map(({ name, id }) => {
      return (
        <li key={id} onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList, loading, errorIndicator } = this.state;
    const items = this.renderItem(peopleList);

    let hasData = !(loading || errorIndicator);
    let error = errorIndicator ? <ErrorIndicater /> : null;
    let load = loading ? <Spinner /> : null;
    let content = hasData ? items : null;

    return (
      <div className="list">
        {error}
        {load}
        <ul>{content}</ul>
      </div>
    );
  }
}
