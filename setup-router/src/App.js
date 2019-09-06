import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import pageNotFound from './components/pageNotFound';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/contact' exact component={Contact}></Route>
            <Route path='/about' exact component={About}></Route>
            <Route component={pageNotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
