import React from 'react';
import { Link } from 'react-router-dom';
import './CharacteresInfos.css';
/** (sans destructuration) */

function CharacteresInfos({ characteresInfos }) {
  return (
    <Link className="link" to={`page/${characteresInfos.id}`}>
      <div className="characteresInfos">
        <img src={characteresInfos.image} alt={characteresInfos.character} />
        <ul className="blocInformations">
          <li> <strong>{characteresInfos.name}</strong> </li>
          {/* <li> type : {characteresInfos.type} </li>
          <li> gender : {characteresInfos.gender} </li>
          <li> origin : {characteresInfos.origin.name} </li>
          <li> location : {characteresInfos.location.name} </li> */}
        </ul>
      </div>
    </ Link>
  );
}

export default CharacteresInfos;