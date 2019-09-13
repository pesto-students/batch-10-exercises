import React, { Fragment } from 'react';

const TodoList = ({ list }) => {
  return (
    <Fragment>
    {list.map((item, _) => {
      <li key={item}>
          {item}
      </li>
    })}
    </Fragment>
);
};
