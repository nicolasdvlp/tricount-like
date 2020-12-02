// == Import npm
import React from 'react';

// == Import
import './App.css';
import Header from '../Header'
import Main from '../Main'

import Data from '../../data/data'

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={Data} />
    </div>
  );
}

export default App;
