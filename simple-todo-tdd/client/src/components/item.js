import React from 'react';

const Item = ({ item }) => {
  return (
    <li style={{textDecoration: item.done ? 'line-through': 'none' }}>{item}</li>
  );
};