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
    const { image, name, species, gender, id } = this.props.alienInfos;
    const menu = this.state.show ? (
      <div>
        <button>{species}</button>
        <button>{gender}</button>
      </div>
    ) : null;
    return (
      <div className="alien">
        <img className="image" src={image} alt={name} />
        <div>
          <button className="name" onClick={this.displayHandler}>
            {name}
          </button>
        </div>
        {menu}
        <h1>{id}</h1>
      </div>
    );
  }
}

export default Alien;
