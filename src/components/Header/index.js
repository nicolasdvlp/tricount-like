// == Import npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import
import './style.scss';

// == Composant
const Header = () => {
return (
    <Container fluid className={Header.name.toLowerCase()}>
            <div className='display'>
                <h1 className='title'>la bonne ardoise</h1>
            </div>
    </Container>
);
};

// == Export
export default Header;