import React from 'react';
import ListItem from './ListItem';

const GroceryList = props => {
  const items = props.items.map((item, i) => (
    <ListItem key={i} name={item} handleXClick={props.deleteItem} />
  ));

  return <ul>{items}</ul>;
};

export default GroceryList;
