import React from 'react'
import LineItem from './lineitem';

const ItemList = ({item,handleCheck,deleting}) => {
  return (
    <ul>
            {item.map((item) =>(
            <LineItem
              item={item}
              key={item.id}
              handleCheck={handleCheck}
              deleting={deleting}
            />
            ))}
        </ul>
  )
}

export default ItemList