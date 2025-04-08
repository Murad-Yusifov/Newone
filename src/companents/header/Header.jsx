import React from 'react'
import styes from './Header.module.css'

const Header = () => {
  return (
    <header>
        <label htmlFor="search">
        <input type="text" id="search" placeholder='Search'/>
        </label>
        <h1>adalene.</h1>
        <nav>
            <ul>    
                <li>Log In</li>
                <li>Cart(0)</li>
            </ul>
        </nav>

    </header>
  )
}

export default Header