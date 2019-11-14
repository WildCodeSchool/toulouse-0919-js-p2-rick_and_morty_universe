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
      <div>
        <p className="colorLink">https://rickandmortyapi.com/api/character/</p>
        <p className="colorLink">https://rickandmortyapi.com/api/location/</p>
        <p className="colorLink">https://rickandmortyapi.com/api/episode/</p>
      </div>
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
