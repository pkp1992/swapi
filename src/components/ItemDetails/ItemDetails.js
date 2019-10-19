import React, { Component, Fragment } from "react";
import "./ItemDetails.css";
import SwapiRequest from "../../services";
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";

export default class ItemDetails extends Component {
  swapi = new SwapiRequest();
  state = {
    item: null,
    loading: false,
    errorIndicator: false,
    image: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.updateItem();
  }
  onError = err => {
    this.setState({ errorIndicator: true, loading: false });
  };

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    this.setState({ loading: true });
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then(item =>
        this.setState({ item, loading: false, errorIndicator: false, image: getImageUrl(item) })
      )
      .catch(this.onError);
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  render() {
    const { loading, errorIndicator, item, image } = this.state;
    if (!item) {
      return (
        <Fragment>
          {errorIndicator ? (
            <ErrorIndicater className="errorImg" />
          ) : (
            <span>Select a peroson from a list</span>
          )}
        </Fragment>
      );
    }
    const hasData = !(loading || errorIndicator);
    const hasError = !loading && errorIndicator;
    const loader = loading ? <Spinner /> : null;
    const data = hasData ? <Item image={image} item={item} /> : null;
    const error = hasError ? <ErrorIndicater /> : null;
    return (
      // <div className="single">
      <Fragment>
        {loader}
        {data}
        {error}
      </Fragment>
      // </div>
    );
  }
}

class Item extends Component {
  render() {
    const {item: { name, gender, birthYear, eyeColor} ,  image } = this.props;
    return (
      <Fragment>
        <img src={image} alt={name} />
        <div className="single_discription">
          <h2>{name}</h2>
          <ul>
            <li>
              <span>Gender: </span>
              <span>{gender}</span>
            </li>
            <li>
              <span>Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li>
              <span>Eye Color: </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
