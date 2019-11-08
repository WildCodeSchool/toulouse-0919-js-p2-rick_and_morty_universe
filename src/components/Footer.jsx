import React from 'react';
import './Footer.css';
import Codepen from '../logo-footer/logo-codepen.png';
import Netflix from '../logo-footer/logo-netflix.png';
import Youtube from '../logo-footer/logo-youtube.png';
import Github from '../logo-footer/logo2-Github.png';
import Linkedin from '../logo-footer/logo2-linkedin.png';

function Footer() {
  return (
    <div className="containerfooter">
      <div className="sectionfooter">
        <div className="titlefooter">Universe</div>
        <p className="text-footer">Official website</p>
      </div>
      <div className="network">
        <a href="https://codepen.io">
          <img className="icone" src={Codepen} alt="codepen" />
        </a>
        <a href="https://www.netflix.com/">
          <img className="icone" src={Netflix} alt="netflix" />
        </a>
        /
        <a href="https://www.youtube.com/">
          <img className="icone" src={Youtube} alt="youtube" />
        </a>
        <a href="https://github.com/">
          <img className="icone" src={Github} alt="github" />
        </a>
        <a href="https://github.com/">
          <img className="icone" src={Linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
