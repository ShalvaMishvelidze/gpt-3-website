import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import Menu from './Menu';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3-navbar">
      <div className="gpt3-navbar-links">
        <div className="gpt3-navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3-navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt3-navbar-sign">
        <p>sign in</p>
        <button type="button">sign up</button>
      </div>
      <div className="gpt3-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3-navbar-menu-container scale-up-center">
            <div className="gpt3-navbar-menu-container-links">
              <Menu />
              <div className="gpt3-navbar-menu-container-links-sign">
                <p>sign in</p>
                <button type="button">sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
