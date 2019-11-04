import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">Star DB</div>
        </Link>
        <ul className="header_list">
          <Link to="/people/">
            <li>People</li>
          </Link>
          <Link to="/planets/">
            <li>Planets</li>
          </Link>
          <Link to="/starships/">
            <li>Starships</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/secret">
            <li>Secret</li>
          </Link>
        </ul>
      </div>
    );
  }
}
