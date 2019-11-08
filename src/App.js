import React from 'react';
import './App.css';
import CharacterPage from './components/CharacterPage';
import CharactersListHeader from './components/CharactersListHeader';
import CharacteresList from './components/CharacteresList';
/* eslint-disable import/no-unresolved */
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li> <Link to="/characters" >Characters</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/characters">
          <CharactersListHeader />
          <CharacteresList />
        </Route>
        <Route path="/page/:id" component={CharacterPage} />
      </Switch>
    </div>
  );
}

export default App;
