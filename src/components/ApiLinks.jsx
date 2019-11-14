import React, {Component} from 'react';
import './SourcePage.css';

class ApiLinks extends Component {
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
        const links = this.state.show ? (
            <div className="textinfo">
                <p>https://rickandmortyapi.com/api/character/</p>
                <p>https://rickandmortyapi.com/api/location/</p>
                <p>https://rickandmortyapi.com/api/episode/</p>
            </div>
        ) : null;
        return (
            <div className="bouton">
                <button className="infoSources" onClick={this.displayHandler}>API</button>
                {links}
            </div>
        )
    }
}
export default ApiLinks;