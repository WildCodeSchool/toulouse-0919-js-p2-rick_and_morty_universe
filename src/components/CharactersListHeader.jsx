import React from 'react';
import { Link } from 'react-router-dom';
import './CharactersListHeader.css';
import logo1 from '../imageaccueil/logo1.png';

function CharactersListHeader() {
  return (
    <nav className="Navbar">
      <div className="BannerHeader">
        <Link to="/">
          <div className="title-logo">
            <img src={logo1} alt="logo accueil" className="logo-img" />
          </div>
        </Link>
        <div className="menu">
          <p>
            <Link to="/contact" className="textmenu">
              <strong>Contact</strong>
            </Link>
          </p>
          <p>
            <Link to="/about" className="textmenu">
              <strong>About</strong>
            </Link>
          </p>
          <p>
            <Link to="/sources" className="textmenu">
              <strong>Sources</strong>
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default CharactersListHeader;
