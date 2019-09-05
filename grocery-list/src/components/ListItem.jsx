import React, { useState, Fragment } from 'react';

const ListItem = props => {
  const [bought, setBought] = useState(false);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.name);

  const color = bought ? 'red' : 'black';
  const handleClick = () => {
    setBought(!bought);
  };

  const handleXClick = () => {
    props.handleXClick(props.name);
  };

  const isEditable = () => {
    setEditable(!editable);
  };

  const handleEdit = e => {
    e.preventDefault();
    if (name.trim()) {
      props.editItem(name);
      setName(name);
    }
  };

  const renderListItem = editable => {
    if (editable) {
      return (
        <form onSubmit={handleEdit}>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
          <input type='submit' value='Add'></input>
        </form>
      );
    }
    return (
      <Fragment>
        <span style={{ color: color }} onClick={handleClick}>
          {name}{' '}
        </span>
        <span onClick={handleXClick}>X</span>
        <input type='button' value='edit' onClick={isEditable}></input>
      </Fragment>
    );
  };

  return <li>{renderListItem(editable)}</li>;
};

export default ListItem;
