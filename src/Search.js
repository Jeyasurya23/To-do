import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        id='search'
        role='searchbox'
        placeholder='Search Items'
        type="text" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

    </form>
  )
}

export default Search