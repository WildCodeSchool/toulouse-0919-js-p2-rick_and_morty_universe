import React from 'react';

class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = [Human];
  }

  render() {
    return (
      <div className="infosPersonage">
        <img src={props.image} className="image" alt="image" />
        <button type="button" onClick={this.state}>
          {' '}
          'Alien Rick'{' '}
        </button>
        <ul>
          <li> name :{props.infosPersonage.name} </li>
          <li> type : {props.type} </li>
          <li> gender : {props.gender} </li>
          <li> origin : {props.origin} </li>
          <li> location : {props.location} </li>
        </ul>
      </div>
    );
  }
}

export default Component1;
