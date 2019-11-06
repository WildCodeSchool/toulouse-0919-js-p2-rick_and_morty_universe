import React from 'react';
// import react router
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AccueilPage from './components/AccueilPage';
import PersoAccueil from './components/PersoAccueil';
import SideBar from './components/sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App">
        <div className="home">
          <SideBar pageWrapId={'accueil'} outerContainerId={'root'} />

          <AccueilPage />
          <PersoAccueil />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
