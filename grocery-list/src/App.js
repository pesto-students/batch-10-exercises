import React, { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";

const AddGroceryForm = ({ addToGroceryList }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <label htmlFor="addItem">Add new item - </label>
      <input
        type="text"
        required={true}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button class="btn btn-primary" onClick={() => addToGroceryList(input)}>
        Add +
      </button>
    </div>
  );
};
AddGroceryForm.propTypes = {
  addToGroceryList: PropTypes.array.isRequired
};

const GroceryItem = ({ item, removeItem }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={checked ? "itemChecked" : "itemUnchecked"}
      onClick={() => setChecked(!checked)}
    >
      <p>
        {item}
        <button
          className="deleteButton btn btn-link"
          onClick={() => removeItem(item)}
        >
          X
        </button>
      </p>
    </div>
  );
};
GroceryItem.propTypes = {
  item: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
};

const GroceryList = ({ groceryList, removeItem }) => {
  return (
    <ul>
      {groceryList.map(item => (
        <li key={item}>
          <GroceryItem item={item} removeItem={removeItem} />
        </li>
      ))}
    </ul>
  );
};
GroceryItem.propTypes = {
  groceryList: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired
};

const App = () => {
  const useGroceryList = initialState => {
    const [items, setItems] = useState(initialState);
    return [
      items,
      item => {
        const newArr = [...items];
        newArr.push(item);
        setItems(newArr);
      },
      itemToRemove => {
        setItems(items.filter(el => el !== itemToRemove));
      }
    ];
  };
  const [groceryList, addToGroceryList, removeItem] = useGroceryList([]);
  return (
    <div className="app">
      <h1>Teri-Meri Grocery</h1>
      <AddGroceryForm addToGroceryList={addToGroceryList} />
      <GroceryList groceryList={groceryList} removeItem={removeItem} />
    </div>
  );
};

export default App;
