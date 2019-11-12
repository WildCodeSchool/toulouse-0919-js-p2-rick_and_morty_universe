import React from 'react';
import './AccueilPage.css';
import titleimage from '../imageaccueil/titleimage.png';
import SearchForm from './SearchForm';
import CharacterPage from './CharacterPage';

function AccueilPage() {
  return (
    <div className="accueil" id="accueil">
      <div className="top-logo">
        <img src={titleimage} alt="title logo" className="title-img" />
        <h1 className="title-accueil">Universe</h1>
      </div>
      <SearchForm path="/page/:id" component={CharacterPage} />
    </div>
  );
}

export default AccueilPage;
