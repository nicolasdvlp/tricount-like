// == Import npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import
import './style.scss';

// == Composant
const Header = () => {
return (
    <Container fluid className="header">
            <div className='display'>
                <h1 className='title'>le juste compte</h1>
            </div>
    </Container>
);
};

// == Export
export default Header;