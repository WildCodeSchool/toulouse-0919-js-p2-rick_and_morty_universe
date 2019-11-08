import React from 'react';

/** (sans destructuration) */
function HumanInfos({ humanInfos }) {
  return (
    <div className="HumanInfos">
      <img src={humanInfos.image} alt={humanInfos.character} />
      <ul className="bloc">
        <li> name :{humanInfos.name} </li>
        <li> type : {humanInfos.type} </li>
        <li> gender : {humanInfos.gender} </li>
        <li> origin : {humanInfos.origin} </li>
        <li> location : {humanInfos.location} </li>
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

export default HumanInfos;
