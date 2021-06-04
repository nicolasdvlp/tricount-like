// == Import npm
import React from 'react';
import { useSwipeable } from 'react-swipeable';

// == Import
import './App.css';
import Header from '../Header'
import Main from '../../containers/Main'
import ModalForm from '../../containers/ModalForm'
import ModalFormExp from '../../containers/ModalFormExp'
import ModalDelUser from '../../containers/ModalDelUser'

function App() {

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('slide left'),
    onSwipedRight: () => console.log('slide right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true// ...config,
  });

  return (
    <div className="App" {...handlers}>
      <Header />
      <Main />

      <ModalForm />
      <ModalFormExp />
      <ModalDelUser />
    </div>
  );
}

export default App;
