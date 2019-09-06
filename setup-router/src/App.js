import React, { Component, Fragment } from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';

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
          <Route path='/home' component={Home} />
          <Route path='/about-us' component={About} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter> 
      </Fragment>
    );
  }
}

export default App;
