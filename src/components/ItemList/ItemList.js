import React, { Component, Fragment } from "react";
import "./ItemList.css";

 class ItemList extends Component {
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
      <Fragment>
        <ul>{items}</ul>
      </Fragment>
    );
  }
}

export default ItemList;