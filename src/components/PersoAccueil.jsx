import React from 'react';
import './PersoAccueil.css';
import bethimg from '../img-perso-accueil/beth1.jpg';
import jerryimg from '../img-perso-accueil/jerry1.jpg';
import mr_poopybuttholeimg from '../img-perso-accueil/mr_poopybutthole1.jpg';
import meeseeksimg from '../img-perso-accueil/meeseeks1.jpg';
import mortyimg from '../img-perso-accueil/morty1.jpg';
import pickle_rickimg from '../img-perso-accueil/pickle_rick1.jpg';
import rickimg from '../img-perso-accueil/rick1.jpg';
import scary_terryimg from '../img-perso-accueil/scary_terry1.jpg';
import scquanchyimg from '../img-perso-accueil/scquanchy1.jpg';
import snowballimg from '../img-perso-accueil/snowball1.jpg';
import summerimg from '../img-perso-accueil/summer1.jpg';

import portalimg from '../imageaccueil/portalimg.png';
import { Link } from 'react-router-dom';

function PersoAccueil() {
  return (
    <div className="" id="perso">
      <div className="portal">
        <img src={portalimg} alt="portal logo" className="portal-img" />
      </div>
      <Link to="/">
        <div className="beth perso-accueil">
          <img src={bethimg} alt="beth logo" className="beth-img" />
        </div>

        <div className="jerry perso-accueil">
          <img src={jerryimg} alt="jerry logo" className="jerry-img" />
        </div>

        <div className="mr_poopybutthole perso-accueil">
          <img
            src={mr_poopybuttholeimg}
            alt="mr_poopybutthole logo"
            className="mr_poopybutthole-img"
          />
        </div>

        <div className="meeseeks perso-accueil">
          <img src={meeseeksimg} alt="meeseeks logo" className="meeseeks-img" />
        </div>

        <div className="morty perso-accueil">
          <img src={mortyimg} alt="morty logo" className="morty-img" />
        </div>

        <div className="pickle_rick perso-accueil">
          <img src={pickle_rickimg} alt="pickle_rick logo" className="pickle_rick-img" />
        </div>

        <div className="rick perso-accueil">
          <img src={rickimg} alt="rick logo" className="rick-img" />
        </div>

        <div className="scary_terry perso-accueil">
          <img src={scary_terryimg} alt="scary_terry logo" className="scary_terry-img" />
        </div>

        <div className="scquanchy perso-accueil">
          <img src={scquanchyimg} alt="scquanchy logo" className="scquanchy-img" />
        </div>

        <div className="snowball perso-accueil">
          <img src={snowballimg} alt="snowball logo" className="snowball-img" />
        </div>

        <div className="summer perso-accueil">
          <img src={summerimg} alt="summer logo" className="summer-img" />
        </div>
      </Link>
    </div>
  );
}

export default PersoAccueil;
