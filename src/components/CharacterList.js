import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const { characterList } = props;

  return (
    <div>
      <h2>Characters:</h2>
      <div className="character-list">
        {characterList.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              location={character.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
