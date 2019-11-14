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
            <div>
                <p className="colorLink">https://www.fandom.com/</p>
                <p className="colorLink">https://rickandmortyapi.com/</p>
            </div>
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
