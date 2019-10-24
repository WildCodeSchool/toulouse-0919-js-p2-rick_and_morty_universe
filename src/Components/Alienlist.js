import React from 'react';
import Alien from './Alien.js';

const alienuser = [
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    name: 'Alien Rick',
    id: 15
  },

  {
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    name: 'Alien Morty',
    id: 14
  },

  {
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    name: 'Alien Googah',
    id: 13
  }
];

function Alienlist(props) {
  return (
    <ul className="bloc">
      {alienuser.map(item => (
        <Alien image={item.image} name={item.name} id={item.id} />
      ))}
    </ul>
  );
}

export default Alienlist;
