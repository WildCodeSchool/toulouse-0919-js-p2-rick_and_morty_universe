import React, { Component } from 'react';
import './ContactPage.css';
import './Carousel';
import Carousel from './Carousel';
import SideBar from './Sidebar'
import Footer from './Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    
    this.textToShow=[
      "Je m'appelle Lucie j'aime la dinde", /*Phrase de Lucie*/
      "We just met Morty, and guess what he told us : ask to Damien!",  /*Phrase de Aina*/
      "Weddings are basically funerals with cake.",  /*Phrase de Ismael*/
      "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV."]; /*Phrase de Damien*/

      this.githubUsernames=[
        "https://github.com/lu-cy-alt", /*Phrase de Lucie*/
        "https://github.com/eine3131",  /*Phrase de Aina*/
        "https://github.com/Strahk",  /*Phrase de Ismael*/
        "https://github.com/NeimaDSky"]; /*Phrase de Damien*/
    this.indexToShow = 0;
    this.subtextRef = React.createRef();
    this.linkRef = React.createRef();
  }
  carouselDidChange = (index) => {
    this.indexToShow = index;

    var subtext = this.subtextRef.current;
    subtext.innerHTML = this.textToShow[this.indexToShow];

    var githublink = this.linkRef.current;
    githublink.href = this.githubUsernames[this.indexToShow];
  }
  
  render(){
    return (
      <div className="contactContainer">
        <SideBar
          page={"about"}/>
        <div className="titleContact">
          About us
        </div>
        <div className="contact">
          <Carousel
            onChangeCarousel={this.carouselDidChange}/>
            <p ref={this.subtextRef} id="subtext">{this.textToShow[0]}</p>
            <a ref={this.linkRef} href={this.githubUsernames[0]} id="linkGithub" target="_blank">Mon Github</a>
        </div>
        <Footer/>
      </div>
    )
  };
}

export default ContactPage;
