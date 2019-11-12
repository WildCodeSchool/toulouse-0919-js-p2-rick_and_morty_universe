import React from 'react';
import './Suggestions.css';
import { NavLink } from 'react-router-dom';

const Suggestions = props => {
  const options = props.results.map(r => (
    <NavLink to={`page/${r.id}`}>
      <div className="suggestion" key={r.id}>
        <img className="suggImg" src={r.image} />
        <p>{r.name}</p>
      </div>
    </NavLink>
  ));
  return <div className="result">{options}</div>;
};

export default Suggestions;
