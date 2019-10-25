import React from 'react';
import './Alien.css';

class Alien extends React.Component {
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
    const { image, name, species, gender, id, location, episode } = this.props.alienInfos;
    const menu = this.state.show ? (
      <div>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{location}</p>
        <p>{episode}</p>
        <p>{id}</p>
      </div>
    ) : null;
    return (
      <div className="alien">
        <img className="avatar" src={image} alt={name} />
        <div className="name">
          <h3 onClick={this.displayHandler}>{name}</h3>
        </div>
        {menu}
      </div>
    );
  }
}

export default Alien;
