import React, { Component } from 'react';
import imagesources from '../ImageSource/imageSource.png';
import titleimage from '../imageaccueil/titleimage.png';
import './SourcePage.css';
import CharactersListHeader from './CharactersListHeader';

class SourcePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show1: false,
            show2: false,
            show3: false,
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
                <p className= "colorLink">https://rickandmortyapi.com/api/character/</p>
                <p className= "colorLink">https://rickandmortyapi.com/api/location/</p>
                <p className= "colorLink">https://rickandmortyapi.com/api/episode/</p>
            </div>
        ) : null;
        const link1 = this.state.show ? (
            <div>
                <p className= "colorLink">https://www.fandom.com/</p>
            </div>
        ) : null;
        const link2 = this.state.show ? (
            <div>
                <p className= "colorLink">https://css-tricks.com/css-containment/</p>
                <p className= "colorLink">https://www.npmjs.com/package/ngx-infinite-scroll</p>
            </div>
        ) : null;
        const link3 = this.state.show ? (
            <div>
                <p className= "colorLink">https://fonts.google.com/</p>
            </div>
        ) : null;
        return (
            <div className= "block">
                <CharactersListHeader />
                <div className= "image">
                    <img className = "titleimage" src={titleimage} alt="titleimage" />
                    <img className="imagesources" src={imagesources} alt="sources" />
                </div>
                <div className= "deuxBoutons">
                    <div className="bouton">
                        <button className="infoSources" onClick={this.displayHandler}>API</button>
                        {links}
                         <button className="infoSources" onClick={this.displayHandler}>Documents</button>
                        {link1}
                    </div>
                    <div className="bouton1">
                        <button className="infoSources" onClick={this.displayHandler}>Codes</button>
                        {link2}
                        <button className="infoSources" onClick={this.displayHandler}>Fonts</button>
                        {link3}
                    </div>
                </div>
            </div>
        );
    }
}

export default SourcePage;
