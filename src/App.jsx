<<<<<<< HEAD
import React from 'react';
import './App.css';
import HumanHeader from './components/HumanHeader';
import HumansList from './components/HumansList';
/* eslint-disable import/no-unresolved */
import HeaderPlanets from './components/HeaderPlanets';
import Alienlist from './components/Alienlist.jsx';
import PlanetsList from './components/PlanetsList';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <HumanHeader />
      <HumansList />
      <HeaderPlanets />
      <PlanetsList />
      <Alienlist />
    </div>
  );
}

export default App;
