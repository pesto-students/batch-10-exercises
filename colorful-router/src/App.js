import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const colorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );
    const {colors} = this.state; 
    return (
        
        <BrowserRouter>
          <Switch>
            <Route exact path='/colors/new' component={NewColor} />
            <Route exact path='/colors' render={(props) => colorListComponent()} />
            <Route exact path='/colors/:color' render={(props) => <Color color ={ this.state.colors} />} />
          </Switch>  
        </BrowserRouter> 
    );
  }
}

export default App;
