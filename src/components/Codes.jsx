import React, {Component} from 'react';
import './SourcePage.css';

class Codes extends Component {
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
        const link2 = this.state.show ? (
            <div className="textinfo">
                <p>https://css-tricks.com/css-containment/</p>
                <p>https://www.npmjs.com/package/ngx-infinite-scroll</p>
            </div>
        ) : null;
        return (
            <div className="bouton">
                <button className="infoSources" onClick={this.displayHandler}>Codes</button>
                {link2}
            </div>
        )
    }
}
export default Codes;

