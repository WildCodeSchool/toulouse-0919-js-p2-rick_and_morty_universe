import React from 'react';
import './HeaderPlanets.css';

function HeaderPlanets() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <nav className="Navbar">
      <div className="PlanetsHeader">
        <img
          src="https://preview.redd.it/jl4d0uj2clcz.jpg?width=960&crop=smart&auto=webp&s=78898d31d741cb1e3212aca97042019d0b865281"
          alt="ImageHeader"
        />
        <h1 className="bigTitle">Planets</h1>
      </div>
    </nav>
  );
}
export default HeaderPlanets;
