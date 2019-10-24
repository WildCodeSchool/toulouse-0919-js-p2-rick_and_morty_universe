import React from 'react';
import './App.css';
import HumanHeader from './components/HumanHeader';
import HumansList from './components/HumansList';

function App() {
  return (
    <div className="App">
      <HumanHeader />
      <HumansList />
    </div>
  );
}

export default App;
