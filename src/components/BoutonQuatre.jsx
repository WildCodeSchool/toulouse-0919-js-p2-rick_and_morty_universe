import React, { Component } from 'react';
import './BoutonQuatre.css';

class BoutonDeux extends Component {
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
        const link3 = this.state.show ? (
            <ul>
                <li>
                    <a className="colorLink" href='https://fonts.google.com/specimen/Freckle+Face' target="_blank">Freckle Face</a>
                </li>
                <li>
                    <a className="colorLink" href='https://fonts.google.com/specimen/Roboto' target="_blank">Roboto</a>
                </li>
            </ul>
        ) : null;
        return (
            <div className="bouton">
                <button className="infoSources" onClick={this.displayHandler}>Fonts</button>
                {link3}
            </div>
        );
    }
}

export default BoutonDeux;
