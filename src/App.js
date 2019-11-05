import React from 'react';
import './App.css';
import CharactersListHeader from './components/CharactersListHeader';
import CharacteresList from './components/CharacteresList';
/* eslint-disable import/no-unresolved */
import HeaderPlanets from './components/HeaderPlanets';
import Alienlist from './components/Alienlist.jsx';
import PlanetsList from './components/PlanetsList';
import {Link, Switch, Route} from 'react-router-dom';



function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">  
    <nav>
      <ul>
      <li> <Link to="/planets" >Planets</Link></li>
      <li> <Link to="/aliens" >Aliens</Link></li>
      <li> <Link to="/characters" >Characters</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path= "/planets">
        <HeaderPlanets />
        <PlanetsList />
      </Route> 
      <Route path="/aliens">
        <Alienlist />
      </Route>     
      <Route path= "/characters">
        <CharactersListHeader />
        <CharacteresList />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
