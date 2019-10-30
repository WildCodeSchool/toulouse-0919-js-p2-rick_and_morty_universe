import React from 'react';
import logo1 from '../imageaccueil/logo1.png';
import './sidebar.css';
import { slide as Menu } from 'react-burger-menu';

const SideBar = props => {
  //const [dropdownOpen, setDropdownOpen] = useState(false);

  //const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="sidebar">
      <img src={logo1} alt="logo accueil" className="logo-img" />
      <Menu reveal right isOpen={false}>
        <a id="planets" className="menu-item" href="/planetes">
          Planets
        </a>
        <a id="humans" className="menu-item" href="/humans">
          Humans
        </a>
        <a id="alien" className="menu-item" href="/alien">
          Aliens
        </a>
        <a id="viedos" className="menu-item" href="/videos">
          Videos
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="sources" className="menu-item" href="/sources">
          Sources
        </a>
      </Menu>
    </div>
  );
};

export default SideBar;
