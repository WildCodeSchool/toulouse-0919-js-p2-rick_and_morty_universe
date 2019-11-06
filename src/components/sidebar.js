import React from 'react';
import logo1 from '../imageaccueil/logo1.png';
import './sidebar.css';
import { slide as Menu } from 'react-burger-menu';

const SideBar = props => {
  return (
    <div className="sidebar">
      <img src={logo1} alt="logo accueil" className="logo-img" />
      <Menu reveal right isOpen={false}>
        <a id="characters" className="menu-item" href="/characters">
          Characters
        </a>
        <a id="viedos" className="menu-item" href="/videos">
          Videos
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="sources" className="menu-item" href="/sources">
          Sources
        </a>
      </Menu>
    </div>
  );
};

export default SideBar;
