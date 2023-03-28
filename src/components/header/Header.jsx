import React from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />  
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul>
            <li><Link to="/aboutus">About Us</Link></li>
            <li>ENG</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
