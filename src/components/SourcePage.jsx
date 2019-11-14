import React, { Component } from 'react';
import imagesources from '../ImageSource/imageSource.png';
import titleimage from '../imageaccueil/titleimage.png';
import './SourcePage.css';
import BoutonUn from './BoutonUn.jsx';
import BoutonDeux from './BoutonDeux.jsx';
import BoutonTrois from './BoutonTrois.jsx';
import BoutonQuatre from './BoutonQuatre.jsx';

class SourcePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="block">
                <div className="image">
                    <img className="titleimage" src={titleimage} alt="titleimage" />
                    <img className="imagesources" src={imagesources} alt="sources" />
                </div>
                <div className = "Bouton">
                    <div className = "Bouton1">
                        <BoutonUn />
                        <BoutonDeux />
                    </div>
                    <div className = "Bouton2">
                        <BoutonTrois />
                        <BoutonQuatre />
                    </div>
                </div>
            </div>
        );
    }
}

export default SourcePage;
