import React from 'react';
import './Suggestions.css';
const Suggestions = props => {
  const options = props.results.map(r => (
    <div className="suggestion" key={r.id}>
      <img className="suggImg" src={r.image} />
      <p>{r.name}</p>
    </div>
  ));
  return <div className="result">{options}</div>;
};

export default Suggestions;
