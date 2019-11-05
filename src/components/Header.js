import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="ui centered">
      <Link to="/">Home</Link>
      <Link to="/characters">Character List</Link>
      <Link to="/search">Search</Link>
    </header>
  );
}

export default Header;
