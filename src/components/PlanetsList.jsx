import React from 'react';
import Planets from './Planets';

const planets = [
  {
    headerImage:
      'https://preview.redd.it/jl4d0uj2clcz.jpg?width=960&crop=smart&auto=webp&s=78898d31d741cb1e3212aca97042019d0b865281',
    id: 3,
    avatar:
      'https://vignette.wikia.nocookie.net/rickandmorty/images/9/9b/Citadelofricksunderrepair.png/revision/latest?cb=20170911051434',
    name: 'Citadel of Ricks',
    type: 'Space station',
    dimension: 'unknown',
    residents: [
      'https://rickandmortyapi.com/api/character/8',
      'https://rickandmortyapi.com/api/character/14'
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/location/3',
    created: '2017-11-10T13:08:13.191Z'
  },
  {
    id: 21,
    avatar:
      'https://vignette.wikia.nocookie.net/rickandmorty/images/d/df/Testicle_Monster_Dimension.png/revision/latest?cb=20150706224430',
    name: 'Testicle Monster Dimension',
    type: 'Dimension',
    dimension: 'Testicle Monster Dimension',
    residents: [
      'https://rickandmortyapi.com/api/character/7',
      'https://rickandmortyapi.com/api/character/436'
    ]
  }
];

const PlanetsList = () => (
  <div>
    {planets.map(item => (
      <Planets avatar={item.avatar} name={item.name} dimension={item.dimension} type={item.type} />
    ))}
  </div>
);

export default PlanetsList;
