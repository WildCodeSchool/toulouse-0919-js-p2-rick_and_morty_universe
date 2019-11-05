import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';

const characterApi = 'https://rickandmortyapi.com/api/character/';

function CharacterApi() {
  const [characterInfo, setCharacterInfo] = useState();
  const [searchCharacterProp, setSearchCharacterProp] = useState('');

  const onSearch = event => {
    setSearchCharacterProp(event.target.value);
  };

  useEffect(() => {
    axios
      .get(characterApi)
      .then(response => {
        setCharacterInfo(response.data.results);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  if (characterInfo) {
    return (
      <MainStyle>
        <Header />
        <SearchForm onSearch={onSearch} searchCharacterProp={searchCharacterProp} />
        <Route exact path="/" component={WelcomePage} />
        <Route
          path="/characters"
          render={() => (
            <CharacterList
              characterList={characterInfo.filter(char => {
                return char.name.toLowerCase().includes(searchCharacterProp.toLowerCase());
              })}
            />
          )}
        />
      </MainStyle>
    );
  }

  return (
    <div>
      <h3>Data is loading</h3>
    </div>
  );
}

export default CharacterApi;
