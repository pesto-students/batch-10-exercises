import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        </BrowserRouter>
        {/* <Home />
        <About />
        <Contact /> */}
      </Fragment>
    );
  }
}

export default App;
