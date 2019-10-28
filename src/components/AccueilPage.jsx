import React from 'react';
import './AccueilPage.css';
import titreimage from '../imageaccueil/titreimage.png';
import portalimg from '../imageaccueil/portalimg.png';

function AccueilPage() {
  return (
    <div className="accueil" id="accueil">
      <div className="top-logo">
        <img src={titreimage} alt="title logo" className="title-img" />
        <h1 className="title-accueil">Universe</h1>
      </div>
      <div className="portal">
        <img src={portalimg} alt="portail logo" className="portal-img" />
      </div>
    </div>
  );
}

export default AccueilPage;
