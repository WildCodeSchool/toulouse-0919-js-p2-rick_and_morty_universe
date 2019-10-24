import React from 'react';
import './Planets.css';

function Planets(props) {
  return (
    <div className="Planets">
      <img src={props.avatar} className="avatar" alt="avatar" />
      <div className="description">
        <div className="title-background">
          <h2 className="name">{props.name}</h2>
        </div>
        <p className="dimension">Dimension: {props.dimension}</p>
        <p className="type">Type: {props.type}</p>
      </div>
    </div>
  );
}

export default Planets;
