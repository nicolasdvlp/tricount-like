// == Import npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import
import './style.scss';

// == Composant
const Header = () => {
return (
    <Container fluid className={Header.name.toLowerCase()}>
        <div className='calculator'>
            <div className='display'>
                <h1 className='title'>les comptes<br/>sont bons</h1>
            </div>
        </div>
    </Container>
);
};

// == Export
export default Header;