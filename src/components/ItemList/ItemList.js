import React, { Component } from "react";
import "./ItemList.css";
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";
export default class ItemList extends Component {
  state = {
    itemList: [],
    loading: true,
    id: null,
    errorIndicator: false
  };

  onError = () => {
    this.setState({ errorIndicator: true, loading: false });
  };

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then(itemList => this.onloadItem(itemList))
      .catch(this.onError);
  }
  onloadItem = itemList => {
    this.setState({ itemList, loading: false });
  };
  renderItems = arr => {
    const {renderItem} = this.props 
    return arr.map((item) => {
      const {id} = item;
      const lable = renderItem(item);
      return (
        <li key={id} onClick={() => this.props.onItemSelected(id)}>
          {lable}
        </li>
      );
    });
  };

  render() {
    const { itemList, loading, errorIndicator } = this.state;
    const items = this.renderItems(itemList);

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
