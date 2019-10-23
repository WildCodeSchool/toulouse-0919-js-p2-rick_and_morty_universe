// src/components/QuoteList.js
import React from 'react';

const Humans = [
  {
    id: 1,
    name: 'Agency Director',
    type: '',
    gender: 'Male',
    origin: 'Earth (Replacement Dimension',
    location: 'Earth (Replacement Dimension',
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg'
  },

  {
    id: 2,
    name: 'Jerry Smith',
    type: '',
    gender: 'Male',
    origin: 'Earth (Replacement Dimension)',
    location: 'Testicle Monster Dimension',
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'
  },

  {
    id: 3,
    name: 'Alan Rails',
    type: 'Superhuman (Ghost trains summoner)',
    gender: 'Male',
    origin: 'Earth (Replacement Dimension',
    location: 'Worldender',
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg'
  }
];

function Humanlist(props) {
  return (
    <ul className="bloc">
      {Humans.map(item => (
        <ListsHumans image={item.image} name={item.name} id={item.id} />
      ))}
    </ul>
  );
}

export default ListsHumans;
