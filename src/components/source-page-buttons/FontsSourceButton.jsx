import React, { Component } from 'react';

class FontsSourceButton extends Component {
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
                    <a className="colorLink" href='https://fonts.google.com/specimen/Freckle+Face' target="_blank">Freckle Face</a>
                </li>
                <li>
                    <a className="colorLink" href='https://fonts.google.com/specimen/Roboto' target="_blank">Roboto</a>
                </li>
            </ul>
        ) : null;
        return (
            <div className="button">
                <button className="infoSources" onClick={this.displayHandler}>Fonts</button>
                {links}
            </div>
        );
    }
}

export default FontsSourceButton;
