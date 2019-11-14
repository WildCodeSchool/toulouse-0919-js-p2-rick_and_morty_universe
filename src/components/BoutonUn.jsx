import React, { Component } from 'react';
import './BoutonUn.css';

class BoutonUn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.displayHandler = this.displayHandler.bind(this);
  }

  displayHandler() {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  }

  render() {
    const links = this.state.show ? (
      <ul>
        <li>
          <a className="colorLink" href='https://rickandmortyapi.com/api/character/' target="_blank">API of the characters</a>
        </li>
        <li>
          <a className="colorLink" href='https://rickandmortyapi.com/api/location/' target="_blank">API of the locations </a>
        </li>
        <li>
          <a className="colorLink" href='https://rickandmortyapi.com/api/episode/' target="_blank">API of the episodes </a>
        </li>
      </ul>
    ) : null;
    return (
      <div className="bouton">
        <button className="infoSources" onClick={this.displayHandler}>API</button>
        {links}
      </div>
    );
  }
}

export default BoutonUn;
