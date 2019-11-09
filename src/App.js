import React from 'react';
import './App.css';
import CharacterPage from './components/CharacterPage';
import CharactersListHeader from './components/CharactersListHeader';
import CharacteresList from './components/CharacteresList';
/* eslint-disable import/no-unresolved */
import { Switch, Route } from 'react-router-dom';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import SideBar from './components/sidebar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Switch>
        <div className="home">
          <Route>
            <SideBar pageWrapId={'accueil'} outerContainerId={'root'} />
            <AccueilPage />
            <PersoAccueil />
            <Footer />
          </Route>
        </div>
        <Route path="/characters">
          <CharactersListHeader />
          <CharacteresList />
        </Route>
        <Route path="/page/:id" component={CharacterPage} />
      </Switch>
    </div>
  );
};
export default App;
