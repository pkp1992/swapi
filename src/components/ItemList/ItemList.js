import React, { Component } from "react";
import "./ItemList.css";
import PropTypes from "prop-types";

class ItemList extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  renderItems = arr => {
    return arr.map(item => {
      const { id } = item;
      const lable = this.props.children(item);
      return (
        <li key={id} onClick={() => this.props.onItemSelected(id)}>
          {lable}
        </li>
      );
    });
  };
  render() {
    const { data } = this.props;
    const items = this.renderItems(data);

    return (
      <div className="main">
        <div className="list">
          <ul>{items}</ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
