import React from 'react';
import ListItem from './ListItem';

const GroceryList = props => {
  const items = props.items.map((item, i) => (

    editItem(i){
      props.editItem(item, index)
    }
    <ListItem
      key={i}
      name={item}
      handleXClick={props.deleteItem}
      editItem={editItem}
    />
  ));

  return <ul>{items}</ul>;
};

export default GroceryList;
