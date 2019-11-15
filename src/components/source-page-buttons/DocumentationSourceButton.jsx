import React, { Component } from 'react';

class DocumentationSourceButton extends Component {
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
                    <a className="colorLink" href='https://codesandbox.io/s/nmy6x9wrj' target="_blank">Menu burger</a>
                </li>
                <li>
                    <a className="colorLink" href='https://www.npmjs.com/package/ngx-infinite-scroll' target="_blank">infinite-scroll</a>
                </li>
                <li>
                    <a className="colorLink" href='http://react.tips/checkboxes-in-react/' target="_blank">Checkboxes</a>
                </li>
            </ul>
        ) : null;
        return (
            <div className="button">
                <button className="infoSources" onClick={this.displayHandler}>Codes</button>
                {links}
            </div>
        );
    }
}

export default DocumentationSourceButton;
