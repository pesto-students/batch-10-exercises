import React, { useState } from 'react';

const ListItem = props => {
  const [bought, setBought] = useState(false);

  const color = bought ? 'red' : 'black';
  const handleClick = () => {
    setBought(!bought);
  };
  return (
    <li>
      <span style={{ color: color }} onClick={handleClick}>
        {props.name}{' '}
      </span>
      <span onClick={props.deleteItem}>X</span>
    </li>
  );
};

export default ListItem;
