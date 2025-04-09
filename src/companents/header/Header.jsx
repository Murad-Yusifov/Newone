import React, { useRef } from "react";
import styles from "./Header.module.css";
import { FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter, FaUser, FaUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <label htmlFor="search">
        <FaSearch className={styles.icons} size='16'/>
      <input type="text" id="search" placeholder="Search"/>
      </label>
      <h1>adalene.</h1>
      <nav>
      <FaFacebook className={styles.icons}/>
      <FaTwitter className={styles.icons}/>
      <FaInstagram className={styles.icons}/>
      <FaPinterest className={styles.icons}/>
        <ul>
      <FaUserCircle className={styles.user}/>
          <li>Log In</li>
          <li>Cart(0)</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
