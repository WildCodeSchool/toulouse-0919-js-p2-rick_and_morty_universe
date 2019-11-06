import React from 'react';
import './CharacteresInfos.css'
/** (sans destructuration) */
function CharacteresInfos({ characteresInfos }) {
  return (
    <div className="characteresInfos">
      <img src={characteresInfos.image} alt={characteresInfos.character} />
      <ul className="blocInformations">
        <li> name :{characteresInfos.name} </li>
        <li> type : {characteresInfos.type} </li>
        <li> gender : {characteresInfos.gender} </li>
        <li> origin : {characteresInfos.origin.name} </li>
        <li> location : {characteresInfos.location.name} </li>
      </ul>
    </div>
  );
}

/** (Ref destructuration) 
function HumanInfos({ humanInfos }) {
  const {name, type, gender, origin, location} = humanInfos;
  return (
    <div className="HumanInfos">
      <img src={image} alt={character} />
      <ul className="bloc">
        <li> name :{name} </li>
        <li> type : {type} </li>
        <li> gender : {gender} </li>
        <li> origin : {origin} </li>
        <li> location : {location} </li>
      </ul>
    </div>
  );
}
*/

export default CharacteresInfos;
