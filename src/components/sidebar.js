import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/planetes">
        Planetes
      </a>

      <a className="menu-item" href="/humans">
        Humans
      </a>

      <a className="menu-item" href="/aliens">
        Aliens
      </a>

      <a className="menu-item" href="/videos">
        Videos
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>

      <a className="menu-item" href="/sources">
        Sources
      </a>
    </Menu>
  );
};
