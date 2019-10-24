import React from 'react';
import './AccueilPage.css';
import logo1 from '../imageaccueil/logo1.png';
import titreimage from '../imageaccueil/titreimage.png';
import portailimg from '../imageaccueil/portailimg.png';

function AccueilPage() {
  return (
    <div className="main-home">
      <img src={logo1} alt="logo accueil" className="logo-img" />
      <h1 className="title-accueil">Universe</h1>
      <img src={titreimage} alt="title logo" className="title-img" />
      <img src={portailimg} alt="portail logo" className="portail-img" />
    </div>
  );
}

export default AccueilPage;
