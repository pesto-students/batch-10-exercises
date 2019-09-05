import React, { useState } from 'react';

const HandleItems = props => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      props.handleSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input
        type='submit'
        value='Add'
        onClick={handleSubmit}
        onSubmit={handleSubmit}
      ></input>
      <input
        type='button'
        value='Clear Items'
        onClick={props.clearList}
        onSubmit={props.clearList}
      ></input>
    </form>
  );
};

export default HandleItems;
