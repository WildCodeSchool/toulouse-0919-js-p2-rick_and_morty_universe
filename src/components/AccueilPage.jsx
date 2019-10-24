import React from 'react';
import './AccueilPage.css';
import logo1 from '../imageaccueil/logo1.png';
import titreimage from '../imageaccueil/titreimage.png';
import portalimg from '../imageaccueil/portalimg.png';

function AccueilPage() {
  return (
    <div className="accueil">
      <img src={logo1} alt="logo accueil" className="logo-img" />
      <h1 className="title-accueil">Universe</h1>
      <img src={titreimage} alt="title logo" className="title-img" />
      <img src={portalimg} alt="portail logo" className="portal-img" />
    </div>
  );
}

export default AccueilPage;
