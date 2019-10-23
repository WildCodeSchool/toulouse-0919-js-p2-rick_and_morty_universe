import React from 'react';
import Alien from './alien.js';

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
    <ul class="bloc">
      {alienuser.map(item => (
        <Alien image={item.image} name={item.name} id={item.id} />
      ))}
    </ul>
  );
}

export default Alienlist;

// {/* <div class="alien">
//     <img class="image" src="https://zupimages.net/up/19/43/1vuc.jpeg" alt="">
//         <h1>An Alien</h1>
// </div> */}
