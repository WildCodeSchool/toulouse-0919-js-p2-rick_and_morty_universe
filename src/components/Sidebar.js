import React from 'react';
import logo1 from '../imageaccueil/logo1.png';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="title-logo">
          <img src={logo1} alt="logo accueil" className="logo-img" />
        </div>
      </Link>
      <div className="menu-burger">
        <Menu reveal right isOpen={false}>
          <p>
            <Link to="/characters">Characters</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/sources">Sources</Link>
          </p>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
