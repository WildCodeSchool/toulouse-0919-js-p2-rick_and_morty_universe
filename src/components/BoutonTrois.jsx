import React, { Component } from 'react';
import './BoutonTrois.css';

class BoutonTrois extends Component {
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
        const link2 = this.state.show ? (
            <div>
                <p className= "colorLink">https://codesandbox.io/s/nmy6x9wrj</p>
                <p className= "colorLink">https://css-tricks.com/css-containment/</p>
                <p className= "colorLink">https://www.npmjs.com/package/ngx-infinite-scroll</p>
                <p className= "colorLink">http://react.tips/checkboxes-in-react/</p>
            </div>
        ) : null;
        return (
            <div className="bouton">
                <button className="infoSources" onClick={this.displayHandler}>Codes</button>
                {link2}
            </div>
        );
    }
}

export default BoutonTrois;
