import React, { useState } from 'react';
import GroceryList from './components/GroceryList';
import InputItem from './components/InputItem';
// import Button from './components/Button';

import './App.css';

const App = () => {
  const [items, setItems] = useState(['oranges', 'apples', 'candy']);
  return (
    <div>
      <GroceryList
        items={items}
        deleteItem={item => {
          console.log(item);
          setItems(items.filter(i => i !== item));
        }}
      ></GroceryList>
      <InputItem
        handleSubmit={item => {
          setItems([...items, item]);
        }}
        clearList={() => setItems([])}
      />
    </div>
  );
};

export default App;
