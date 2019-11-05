import React from 'react';
import './App.css';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import SideBar from './components/SideBar';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App" id="App">
      <SideBar pageWrapId={'accueil'} outerContainerId={'App'} />
      <Header />
      <CharacterList />
      <AccueilPage />
      <PersoAccueil />
    </div>
  );
}

export default App;
