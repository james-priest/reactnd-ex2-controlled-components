import React from 'react';

function Item(props) {
  const {item} = props;
  return (
    <li>{item}</li>
  )
}

export default Item;