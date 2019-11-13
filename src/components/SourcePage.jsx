import React, { Component } from 'react';
import imagesources from '../ImageSource/imageSource.png';
import titleimage from '../imageaccueil/titleimage.png';
import './SourcePage.css';

class SourcePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
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
            <div>
                <p>https://rickandmortyapi.com/api/character/</p>
                <p>https://rickandmortyapi.com/api/location/</p>
                <p>https://rickandmortyapi.com/api/episode/</p>
            </div>
        ) : null;
        const link1 = this.state.show ? (
            <div>
                <p>https://www.fandom.com/</p>
            </div>
        ) : null;
        const link2 = this.state.show ? (
            <div>
                <p>https://css-tricks.com/css-containment/</p>
                <p>https://www.npmjs.com/package/ngx-infinite-scroll</p>
            </div>
        ) : null;
        const link3 = this.state.show ? (
            <div>
                <p>https://fonts.google.com/</p>
            </div>
        ) : null;
        return (
            <div className="block">
                <div className="image">
                    <img className="titleimage" src={titleimage} alt="titleimage" />
                    <img className="imagesources" src={imagesources} alt="sources" />
                </div>
                <div className="deBoutons">
                    <div className="bouton">
                        <button className="infoSources" onClick={this.displayHandler}>API</button>
                        {links}
                    </div>
                    <div className="bouton">
                        <button className="infoSources" onClick={this.displayHandler}>Documents</button>
                        {link1}
                    </div>
                    <div className="bouton">
                        <button className="infoSources" onClick={this.displayHandler}>Codes</button>
                        {link2}
                    </div>
                    <div className="bouton">
                        <button className="infoSources" onClick={this.displayHandler}>Fonts</button>
                        {link3}
                    </div>
                </div>
            </div>
        );
    }
}
export default SourcePage;