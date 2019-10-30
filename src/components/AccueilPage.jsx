import React from 'react';
import './AccueilPage.css';
import titleimage from '../imageaccueil/titleimage.png';
import portalimg from '../imageaccueil/portalimg.png';

function AccueilPage() {
  return (
    <div className="accueil" id="accueil">
      <div className="top-logo">
        <img src={titleimage} alt="title logo" className="title-img" />
        <h1 className="title-accueil">Universe</h1>
      </div>

      <div className="portal">
        <img src={portalimg} alt="portal logo" className="portal-img" />
      </div>
    </div>
  );
}

export default AccueilPage;
