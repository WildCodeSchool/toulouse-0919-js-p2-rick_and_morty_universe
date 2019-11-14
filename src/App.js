import React from 'react';
import './App.css';
import CharacterPage from './components/CharacterPage';
import CharacterPageHeader from './components/CharacterPageHeader';

import CharacteresList from './components/CharacteresList';
/* eslint-disable import/no-unresolved */
import { Switch, Route } from 'react-router-dom';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <div className="home">
          <Sidebar pageWrapId="accueil" outerContainerId="root" />
          <AccueilPage />
          <PersoAccueil />
          <Footer />
            </div>
        </Route>
        <Route path="/characters">
          {/* <p>allo</p> */}
          
          <CharacteresList />
        </Route>
        <Route path="/page/:id" component={CharacterPage} />
          <CharacterPageHeader />
          <CharacterPage />
      </Switch>
    </div>
  );
}

export default App;