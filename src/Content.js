import React from 'react'
import ItemList from './itemlist';

const Content = ({item,handleCheck,deleting}) => {
  return (
        <main>
          {(item.length) ? (
            <ItemList 
            item={item}
            handleCheck={handleCheck}
            deleting={deleting}
            />
           ) : (
            <p style={ {fontSize:'50px',margin:'2rem',textAlign:'center',color:'white'} }>YOURS LIST IS EMPTY</p>
          )}
        </main>
  )
}

export default Content