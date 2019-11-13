import React from 'react';
import { Link } from 'react-router-dom';
import './CharacteresInfos.css';
/** (sans destructuration) */

function CharacteresInfos({ characteresInfos }) {
  return (
    <Link className="link" to={`page/${characteresInfos.id}`}>
      <div className="characteresInfos">
        <img className="vignette" src={characteresInfos.image} alt={characteresInfos.character} />
        <ul className="blocInformations">
          <li>
            <strong className="characteresname">{characteresInfos.name}</strong>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default CharacteresInfos;