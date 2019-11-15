import React from 'react';
import { Link } from 'react-router-dom';
import './CharacteresInfos.css';
/** (sans destructuration) */

function CharacteresInfos({ characteresInfos }) {
  return (
    <Link className="link" to={`page/${characteresInfos.id}`}>
      <div className="characteresInfos">
        <img className="vignette" src={characteresInfos.image} alt={characteresInfos.character} />
        
        <strong className="characteresname">{characteresInfos.name}</strong>
      </div>
    </Link>
  );
}

export default CharacteresInfos;