import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/App.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    );
  }
}
