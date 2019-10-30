import React from 'react';
import './App.css';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App" id="App">
      <SideBar pageWrapId={'accueil'} outerContainerId={'App'} />
      <AccueilPage />
      <PersoAccueil />
    </div>
  );
}

export default App;
