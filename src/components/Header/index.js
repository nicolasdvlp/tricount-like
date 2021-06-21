// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Header = () => {
  return (
    <div className="bg-white text-center h-20 leading-cTitle">
      <div className='mx-auto relative top-1/2 cdisplay'>
        <h1 className='text-4xl text-gray-800 cFont shadow-2xl'>le juste compte</h1>
      </div>
    </div>
  );
};

// == Export
export default Header;