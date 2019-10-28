import React, { useState } from 'react';
import logo1 from '../imageaccueil/logo1.png';
import './sidebar.css';
import { slide as Menu } from 'react-burger-menu';

const SideBar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="sidebar">
      <img src={logo1} alt="logo accueil" className="logo-img" />
      <Menu reveal right isOpen={false}>
        <a id="home" className="menu-item" href="/">
          Planets
        </a>
        <a id="about" className="menu-item" href="/about">
          Humans
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Aliens
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Videos
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Sources
        </a>
      </Menu>
    </div>
  );
};

export default SideBar;
