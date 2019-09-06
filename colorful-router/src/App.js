import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import "./styles/App.css";
import ColorList from "./components/ColorList";
import Color from "./components/Color";
import NewColor from "./components/NewColor";
import NoMatch from "./components/NoMatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: "red",
          hex: "#FF0000"
        },
        {
          name: "green",
          hex: "#00FF00"
        },
        {
          name: "blue",
          hex: "#0000FF"
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path={["/", "/colors"]}
          render={props => <ColorList {...props} colors={this.state.colors} />}
        />
        <Route
          exact
          path="/colors/new"
          render={props => <NewColor {...props} addColor={this.handleAdd} />}
        />
        <Route
          exact
          path="/colors/:color"
          render={props => <Color {...props} colors={this.state.colors} />}
        />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
