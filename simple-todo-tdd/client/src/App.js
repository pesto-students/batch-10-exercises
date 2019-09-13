import React, { Component, Fragment } from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';

import Form from './components/Form';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
        <Switch>
          <Route excat path='/' component={Form} />
          <Route path='/new/:id' component={Form} />
          <Route path='/List' component={List} />
          </Switch>
        </BrowserRouter> 
      </Fragment>
    );
  }
}

export default App;
