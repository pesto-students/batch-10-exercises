import React, { useState } from 'react';

const ListItem = props => {
  const [bought, setBought] = useState(false);

  const color = bought ? 'red' : 'black';
  const handleClick = () => {
    setBought(!bought);
  };

  const handleXClick = () => {
    props.handleXClick(props.name);
  };

  return (
    <li>
      <span style={{ color: color }} onClick={handleClick}>
        {props.name}{' '}
      </span>
      <span onClick={handleXClick}>X</span>
    </li>
  );
};

export default ListItem;
