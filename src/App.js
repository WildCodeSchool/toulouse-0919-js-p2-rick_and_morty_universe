import React from 'react';
import './App.css';
import CharacterPage from './components/CharacterPage';
import CharacteresList from './components/CharacteresList';
import SourcePage from './components/SourcePage';
/* eslint-disable import/no-unresolved */
import { Switch, Route } from 'react-router-dom';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import SideBar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
        <div className="home">
            <SideBar pageWrapId={'accueil'} outerContainerId={'root'} />
            <AccueilPage />
            <PersoAccueil />
            <Footer />
        </div>
          </Route>
        <Route path="/characters" >
          <CharacteresList />
        </Route>
        <Route path="/page/:id" component={CharacterPage} />
        <Route>
          <SourcePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;