import React, { useState, useEffect } from 'react';

import './styles/App.css';

function App() {
  const [items, setItem] = useState(['milk']);
  const [input, setInput] = useState(null);

  function addItem() {
    setItem([...items, input]);
    setInput('');
  }

  useEffect(() => {
    // addItem();

    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };
  }, [items]);
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
      <form>
        <label htmlFor="item">
          item:
          <input
            type="text"
            name="item"
            value={input}
            onChange={({ target: { value } }) => setInput(value)}
          />
        </label>
        <button type="button" onClick={addItem}>Add</button>
        <button type="button" onClick={() => setItem([])}>Clear</button>
      </form>
    </div>
  );
}

export default App;
