import React from 'react';
import styles from './Header.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee, faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons';  // Import faMagnifyingGlass

const Header = () => {
  return (
    <header>
      <label htmlFor="search"><FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faMagnifyingGlass} /> 
        <input type="text" id="search" placeholder="Search" />
      </label>
      <h1>adalene.</h1>
      <nav>
        <ul>
          <li>Log In</li>
          <li>Cart(0)</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
