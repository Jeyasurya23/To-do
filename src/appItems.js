import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useRef } from 'react'

const AddItems = ({newItem ,setNewItem ,handleSumbit}) => {

  const inputRef =useRef()
  return (
    <form className='addForm' onSubmit={handleSumbit}>
        <label htmlFor="addItems">Add Item</label>
        <input 
        autoFocus
        ref={inputRef}
        id='addItem'
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='sumbit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}>
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItems