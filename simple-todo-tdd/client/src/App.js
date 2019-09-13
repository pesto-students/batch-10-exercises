import React from 'react';

import './App.css';

const App = () => (
  <div className="conatiner">
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      <form>
        <label for="item">Next task: </label>
        <input type="text" name="item" placeholder="Enter next task"/>
        <button type="submit">Add</button>
      </form> 
  </div>
);

export default App;
