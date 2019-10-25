<<<<<<< HEAD
/* eslint-disable import/no-unresolved */
import React from 'react';
import HeaderPlanets from './components/HeaderPlanets';
import Alienlist from './Components/Alienlist.jsx';
import PlanetsList from './components/PlanetsList';
import './App.css';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <HeaderPlanets />
      <PlanetsList />
      <Alienlist />
    </div>
  );
}

export default App;
