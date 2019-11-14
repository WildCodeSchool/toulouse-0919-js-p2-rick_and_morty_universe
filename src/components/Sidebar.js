import React, {Component} from 'react';
import logo1 from '../imageaccueil/logo1.png';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/">
          <div className="title-logo">
            <img src={logo1} alt="logo accueil" className="logo-img" />
          </div>
        </Link>
        <div className="menu-burger">
          <Menu reveal right isOpen={false}>
          {(this.props.page !== "characters") ? 
            <p>
              <Link to="/characters">Characters</Link>
            </p>
            : ''}
            {(this.props.page !== "about") ? 
            <p>
              <Link to="/about">About us</Link>
            </p>
            : ''}
            {(this.props.page !== "sources") ?
            <p>
              <Link to="/sources">Sources</Link>
            </p>
            : ''}
          </Menu>
        </div>
        {
        <div className="menu">
          
            {(this.props.page !== "characters") ? 
              <p>
                <Link to="/characters" className="textmenu">
                  <strong>Characters</strong>
                </Link>
              </p>
            : ''}
            {(this.props.page !== "about") ? 
              <p>
                <Link to="/about" className="textmenu">
                  <strong>About us</strong>
                </Link>
              </p>
            : ''}
            {(this.props.page !== "sources") ?
              <p>
                <Link to="/sources" className="textmenu">
                  <strong>Sources</strong>
                </Link>
              </p>
            : ''}
          </div>
          }
      </div>
    );  
  }
};

export default Sidebar;
