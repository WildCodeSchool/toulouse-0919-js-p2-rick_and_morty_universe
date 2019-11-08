import React from 'react';
import './AccueilPage.css';
import titleimage from '../imageaccueil/titleimage.png';
import SearchForm from './SearchForm';

function AccueilPage() {
  return (
    <div className="accueil" id="accueil">
      <div className="top-logo">
        <img src={titleimage} alt="title logo" className="title-img" />
        <h1 className="title-accueil">Universe</h1>
      </div>
      <SearchForm />
    </div>
  );
}

export default AccueilPage;
