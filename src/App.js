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
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="home">
            <SideBar 
            pageWrapId={'accueil'} 
            outerContainerId={'root'} />
            <AccueilPage />
            <PersoAccueil />
          </div>
          <Footer />
        </Route>
        <Route path="/characters" >
          <SideBar 
          pageWrapId={'accueil'} 
          outerContainerId={'root'} 
          page={"characters"}/>
          <CharacteresList />
        </Route>
        <Route path="/page/:id" component={CharacterPage} />
        <Route path="/about" component={ContactPage} />
        <Route path="/source" component={SourcePage} />
      </Switch>
    </div>
  );
}

export default App;