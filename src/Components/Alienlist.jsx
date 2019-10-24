import React from 'react';
import Alien from './Alien.jsx';

const alienuser = [
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    name: 'Alien Rick',
    id: 15,
    gender: 'Male',
    species: 'Alien',
    location: 'Earth (Replacement Dimension)',
    episode: 'https://rickandmortyapi.com/api/episode/10'
  },

  {
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    name: 'Alien Morty',
    id: 14,
    gender: 'Male',
    species: 'Alien',
    location: 'Citadel of Ricks',
    episode: 'https://rickandmortyapi.com/api/episode/10'
  },

  {
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    name: 'Alien Googah',
    id: 13,
    gender: 'Male',
    species: 'unknown',
    location: 'Earth (Replacement Dimension)',
    episode: 'https://rickandmortyapi.com/api/episode/31'
  }
];

// const alienLocation = [
//   {
//     name:
//   }
// ]

function Alienlist(props) {
  return (
    <ul className="bloc">
      {alienuser.map(item => (
        <Alien alienInfos={item} />
      ))}
    </ul>
  );
}

export default Alienlist;
