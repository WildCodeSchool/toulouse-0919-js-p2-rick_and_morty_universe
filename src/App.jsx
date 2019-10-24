/* eslint-disable import/no-unresolved */
import React from 'react';
import HeaderPlanets from './components/HeaderPlanets';
//import Planets from './components/Planets';
import PlanetsList from './components/PlanetsList';
import './App.css';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <HeaderPlanets />
      <PlanetsList />
    </div>
  );
}

export default App;
