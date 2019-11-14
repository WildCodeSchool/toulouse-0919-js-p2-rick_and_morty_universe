import React from 'react';
import './App.css';
import CharacterPage from './components/CharacterPage';
<<<<<<< HEAD
import CharacterPageHeader from './components/CharacterPageHeader';

=======
>>>>>>> dev
import CharacteresList from './components/CharacteresList';
import SourcePage from './components/SourcePage';
/* eslint-disable import/no-unresolved */
import { Switch, Route } from 'react-router-dom';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
<<<<<<< HEAD
import Sidebar from './components/Sidebar';
=======
import SideBar from './components/Sidebar';
>>>>>>> dev
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
<<<<<<< HEAD
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
=======
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
>>>>>>> dev
      </Switch>
    </div>
  );
}

export default App;