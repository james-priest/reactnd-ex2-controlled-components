import React from 'react';
import Item from './Item.js';

function ItemList(props) {
  const {items} = props;
  return (
    <div className="item-list-wrapper">
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => <Item item={item} key={index} />)}
      </ol>
    </div>
  )
}

export default ItemList;