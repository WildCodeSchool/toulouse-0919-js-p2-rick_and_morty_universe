import React, { Component } from 'react';
import './BoutonDeux.css';

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
        const link1 = this.state.show ? (
            <ul>
                <li>
                    <a className="colorLink" href='https://www.fandom.com/' target="_blank">Website1</a>
                </li>
                <li>
                    <a className="colorLink" href='https://rickandmortyapi.com/' target="_blank">Website2</a>
                </li>
            </ul>
        ) : null;
        return (
            <div className="bouton">
                <button className="infoSources" onClick={this.displayHandler}>Documents</button>
                {link1}
            </div>
        );
    }
}

export default BoutonDeux;
