// == Import npm
import React from 'react';

// == Import
import './App.css';
import Header from '../Header'
import Main from '../../containers/Main'
import ModalForm from '../../containers/ModalForm'
import ModalFormExp from '../../containers/ModalFormExp'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <ModalForm />
      <ModalFormExp />
    </div>
  );
}

export default App;
