import React from 'react';
import './App.css';
import HumanHeader from './components/HumanHeader';
import HumansList from './components/HumansList';
import HeaderPlanets from './components/HeaderPlanets';
import Alienlist from './components/Alienlist';
import PlanetsList from './components/PlanetsList';
import CharacterPage from './components/CharacterPage';
import { Link, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li> <Link to="/planets" >Planets</Link></li>
          <li> <Link to="/aliens" >Aliens</Link></li>
          <li> <Link to="/humans" >Humans</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/planets">
          <HeaderPlanets />
          <PlanetsList />
        </Route>
        <Route path="/aliens">
          <Alienlist />
        </Route>
        <Route path="/humans">
          <HumanHeader />
          <HumansList />
        </Route>
        <Route path="/page/:id" component={CharacterPage} /> 
      </Switch>
    </div>
  );
}

export default App;
