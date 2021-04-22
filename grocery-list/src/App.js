import React, { useState } from 'react';
import GroceryList from './components/GroceryList';
import HandleItems from './components/HandleItems';
// import Button from './components/Button';

import './App.css';

const App = () => {
  const [items, setItems] = useState(['oranges', 'apples', 'candy']);
  return (
    <div>
      <GroceryList
        items={items}
        deleteItem={item => {
          setItems(items.filter(i => i !== item));
        }}
//         editItem={setItems(items.map(i, index)=>{
// i[index]
//         })}
      }
      ></GroceryList>
      <HandleItems
        handleSubmit={item => {
          setItems([...items, item]);
        }}
        clearList={() => setItems([])}
      />
    </div>
  );
};

export default App;
