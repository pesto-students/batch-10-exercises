import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../styles/ColorList.css";

const ColorList = props => {
  const colorLinks = props.colors.map(color => (
    <li key={color.hex}>
      <Link
        className="ColorLinks"
        to={{ pathname: `/colors/${color.name}`, state: { color } }}
      >
        {color.name}
      </Link>
    </li>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the Colorful Router.</h1>
        <Link className="AddColorButton" to="/colors/new">
          Add a color
        </Link>
      </header>
      <div className="App-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired
};

export default ColorList;
