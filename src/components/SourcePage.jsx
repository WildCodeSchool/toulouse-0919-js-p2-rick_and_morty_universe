import React, { Component } from 'react';

import titleimg2 from '../imageaccueil/titleimg2.png';
import './SourcePage.css';
import FontsSourceButton from './FontsSourceButton.jsx';
import SideBar from './Sidebar'
import Footer from './Footer'

class SourcePage extends Component {
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
                            <a className="infoSources" href='https://rickandmortyapi.com/'>API</a>
                        </div>
                        <div className="button">
                            <a className="infoSources" href='https://www.deviantart.com/search?q=rick%20and%20morty'>Images sources</a>
                        </div>

                    </div>
                    <div className = "column-button">
                        <div className="button">
                            <a className="infoSources" href='https://fr.reactjs.org/docs/getting-started.html'>React doc</a>
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