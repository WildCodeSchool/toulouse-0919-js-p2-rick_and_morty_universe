import React, { Component } from 'react';
import './SourcePage.css';

class Fonts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.displayHandler = this.displayHandler.bind(this);
    };

    displayHandler() {
        this.setState(prevState => {
            return { show: !prevState.show };
        });
    }
    render() {
        const link3 = this.state.show ? (
            <div className="textinfo">
                <p>https://fonts.google.com/</p>
            </div>
        ) : null;
        return (
            <div className="bouton">
                <button className="infoSources" onClick={this.displayHandler}>Fonts</button>
                {link3}
            </div>
        )
    }
}
export default Fonts;