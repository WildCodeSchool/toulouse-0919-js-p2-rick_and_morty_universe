import React from 'react';
import './Alien.css';

class Alien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.show = this.show.bind(this);
  }

  render() {
    return (
      <alienpage className="alien">
        <img className="image" src={this.props.image} alt={this.props.name} />
        <div>
          <button
            class="name"
            onClick={event => {
              const newShow = !this.state.show;
              this.setState({ click: newShow });
            }}
          >
            {this.state.name}
          </button>
          <div>
            <button>{this.state.species}</button>
            <button>{this.state.gender}</button>
          </div>
        </div>
        <h1>{this.props.id}</h1>
      </alienpage>
    );
  }
}

export default Alien;
