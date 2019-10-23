import React from 'react';
import './alien.css';

class Alien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    };
  }
  render() {
    return (
      <alienpage class="alien">
        <img class="image" src={this.props.image} alt={this.props.name} />
        <button
          class="name"
          onClick={event => {
            const newClick = !this.state.click;
            this.setState({ click: newClick });
          }}
        >
          {' '}
          {this.props.name}
        </button>
        <h1>{this.props.id}</h1>
      </alienpage>
    );
  }
}

export default Alien;

// onClick={event => {
//     const newFavorite = !this.state.favorite;
//     this.setState({ favorite: newFavorite });
