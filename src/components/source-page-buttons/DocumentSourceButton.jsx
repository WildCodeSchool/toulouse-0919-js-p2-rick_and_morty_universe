import React, { Component } from 'react';

class DocumentSourceButton extends Component {
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
            <ul className="links">
                <li>
                    <a className="colorLink" href='https://www.fandom.com/' target="_blank">Website1</a>
                </li>
                <li>
                    <a className="colorLink" href='https://rickandmortyapi.com/' target="_blank">Website2</a>
                </li>
            </ul>
        ) : null;
        return (
            <div className="button">
                <button className="infoSources" onClick={this.displayHandler}>Documents</button>
                {links}
            </div>
        );
    }
}

export default DocumentSourceButton;
