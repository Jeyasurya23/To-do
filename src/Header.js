import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Headers.defaultprops={
  title: "Surya"
}
export default Header