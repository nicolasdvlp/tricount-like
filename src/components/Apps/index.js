// == Import npm
import React from 'react';

// == Import
import './App.css';
import Header from '../Header'
import Main from '../../containers/Main'
import ModalForm from '../../containers/ModalForm'
import ModalFormExp from '../../containers/ModalFormExp'
import ModalDelUser from '../../containers/ModalDelUser'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <ModalForm />
      <ModalFormExp />
      <ModalDelUser />
    </div>
  );
}

export default App;
