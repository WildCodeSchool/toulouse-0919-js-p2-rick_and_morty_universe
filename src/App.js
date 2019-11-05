import React from 'react';
// import react router
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import SideBar from './components/SideBar';
import Header from './components/Header.js';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <SideBar pageWrapId={'accueil'} outerContainerId={'App'} />
        <Header />
        <SearchForm />
        <AccueilPage />
        <PersoAccueil />
      </div>
    </BrowserRouter>
  );
}

export default App;
