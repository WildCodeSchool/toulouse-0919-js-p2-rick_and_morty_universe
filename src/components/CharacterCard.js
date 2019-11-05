import React from 'react';

function CharacterCrad(props) {
  return (
    <div>
      <img src={props.image} />
      <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Location: {props.location.name}</p>
      <p>Origin: {props.origin.name}</p>
    </div>
  );
}
export default CharacterCrad;
