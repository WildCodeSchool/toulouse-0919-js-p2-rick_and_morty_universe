import React from 'react';
import './Planets.css';

class Planets extends React.Component {
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
    const menu = this.state.show ? (
      <div>
        <p className="dimension">Dimension: {this.props.dimension}</p>
        <p className="type">Type: {this.props.type}</p>
      </div>
    ) : null;

    return (
      <div className="Planets">
        <img src={this.props.avatar} className="avatar" alt="avatar" />
        <div className="description">
          <div className="title-background">
            <h2 className="name" onClick={this.displayHandler}>
              {this.props.name}
            </h2>
          </div>
          {menu}
        </div>
      </div>
    );
  }
}
export default Planets;
