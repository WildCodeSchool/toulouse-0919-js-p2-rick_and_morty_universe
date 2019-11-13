import React from 'react';
import './PersoAccueil.css';
import { Link } from 'react-router-dom';
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

function PersoAccueil() {
  return (
    <div className="" id="perso">
      <div className="portal">
        <img src={portalimg} alt="portal logo" className="portal-img" />
      </div>

      <div className="beth perso-accueil">
        <div className="zoom">
          <div className="rotating-beth">
            <a
              href="https://rickandmorty.fandom.com/wiki/Beth_Smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bethimg} alt="beth logo" className="beth-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="jerry perso-accueil">
        <div className="zoom">
          <div className="rotating-jerry">
            <a
              href="https://rickandmorty.fandom.com/wiki/Jerry_Smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={jerryimg} alt="jerry logo" className="jerry-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="mr_poopybutthole perso-accueil">
        <div className="zoom">
          <div className="rotating-poopy">
            <a
              href="https://rickandmorty.fandom.com/wiki/Mr._Poopybutthole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mr_poopybuttholeimg}
                alt="mr_poopybutthole logo"
                className="mr_poopybutthole-img"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="meeseeks perso-accueil">
        <div className="zoom">
          <div className="rotating-meeseeks">
            <a
              href="https://rickandmorty.fandom.com/wiki/Mr._Meeseeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={meeseeksimg} alt="meeseeks logo" className="meeseeks-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="morty perso-accueil">
        <div className="zoom-main-characters">
          <div className="rotating-morty">
            <a
              href="https://rickandmorty.fandom.com/wiki/Morty_Smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mortyimg} alt="morty logo" className="morty-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="pickle_rick perso-accueil">
        <div className="zoom">
          <div className="rotating-pickle">
            <a
              href="https://rickandmorty.fandom.com/wiki/Pickle_Rick_(Character)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pickle_rickimg} alt="pickle_rick logo" className="pickle_rick-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="rick perso-accueil">
        <div className="zoom-main-characters">
          <div className="rotating-rick">
            <a
              href="https://rickandmorty.fandom.com/wiki/Rick_Sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rickimg} alt="rick logo" className="rick-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="scary_terry perso-accueil">
        <div className="zoom">
          <div className="rotating-terry">
            <a
              href="https://rickandmorty.fandom.com/wiki/Scary_Terry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={scary_terryimg} alt="scary_terry logo" className="scary_terry-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="scquanchy perso-accueil">
        <div className="zoom">
          <div className="rotating-scquanchy">
            <a
              href="https://rickandmorty.fandom.com/wiki/Squanchy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={scquanchyimg} alt="scquanchy logo" className="scquanchy-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="snowball perso-accueil">
        <div className="zoom">
          <div className="rotating-snowball">
            <a
              href="https://rickandmorty.fandom.com/wiki/Snuffles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={snowballimg} alt="snowball logo" className="snowball-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="summer perso-accueil">
        <div className="zoom">
          <div className="rotating-summer">
            <a
              href="https://rickandmorty.fandom.com/wiki/Summer_Smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={summerimg} alt="summer logo" className="summer-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersoAccueil;
