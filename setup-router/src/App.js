import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Route path='/' exact component={Home}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/about' exact component={About}></Route>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
