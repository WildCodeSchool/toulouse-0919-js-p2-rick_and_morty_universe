import React, { Component } from 'react';

import titleimg2 from '../imageaccueil/titleimg2.png';
import './SourcePage.css';
import DocumentSourceButton from './source-page-buttons/DocumentSourceButton.jsx';
import DocumentationSourceButton from './source-page-buttons/DocumentationSourceButton.jsx';
import FontsSourceButton from './source-page-buttons/FontsSourceButton.jsx';
import SideBar from './Sidebar'
import Footer from './Footer'

class SourcePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="block"> 
                <SideBar
                page={"sources"}/>
                <div className="image">
                        <img className="titleimage" src={titleimg2} alt="titleimage" />
                    </div>
                <div className="titleSources">
                    Sources
                </div>
                <div className="button-links">
                    <div className = "column-button">
                        <div className="button">
                            <a className="infoSources" href='https://rickandmortyapi.com/' target="_blank">API</a>
                        </div>
                        <div className="button">
                            <a className="infoSources" href='https://www.deviantart.com/search?q=rick%20and%20morty' target="_blank">Images sources</a>
                        </div>

                    </div>
                    <div className = "column-button">
                        <div className="button">
                            <a className="infoSources" href='https://fr.reactjs.org/docs/getting-started.html' target="_blank">React doc</a>
                        </div>
                        <FontsSourceButton />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SourcePage;
