import React, { Component } from 'react';
import './ContactPage.css';
import './Carousel';
import Carousel from './Carousel';
import SideBar from './sidebar'
import Footer from './Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    
    this.textToShow=[
      "Je m'appelle Lucie j'aime la dinde", /*Phrase de Lucie*/
      "Je m'appelle Aina j'aime le pain",  /*Phrase de Aina*/
      "Je m'appelle Ismael j'aime la dinde",  /*Phrase de Ismael*/
      "Je m'appelle Damien j'aime le pain"]; /*Phrase de Damien*/
    this.indexToShow = 0;
    this.myRef = React.createRef();
  }
  carouselDidChange = (index) => {
    this.indexToShow = index;
    var lediv = this.myRef.current;
    lediv.innerHTML = this.textToShow[this.indexToShow];
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
            <p ref={this.myRef} id="subtext">{this.textToShow[0]}</p>
        </div>
        <Footer/>
      </div>
    )
  };
}

export default ContactPage;
