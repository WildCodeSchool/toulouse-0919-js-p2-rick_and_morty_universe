import React, { Component } from 'react';
import imagesources from '../ImageSource/imageSource.png';
import titleimage from '../imageaccueil/titleimage.png';
import './SourcePage.css';
import ApiLinks from './ApiLinks';
import Documents from './Documents';
import Codes from './Codes';
import Fonts from './Fonts';

class SourcePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="block">
                <div className="image">
                    <img className="titleimage" src={titleimage} alt="titleimage" />
                    <img className="imagesources" src={imagesources} alt="sources" />
                </div>
                <div>
                    <ApiLinks />
                    <Documents />
                    <Codes />
                    <Fonts />
                </div>
            </div>
        )
    }
}
export default SourcePage;