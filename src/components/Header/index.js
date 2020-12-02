// == Import npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import
import './style.scss';

// == Composant
const Header = () => {
return (
    <Container fluid className={Header.name.toLowerCase()}>
        Header
    </Container>
);
};

// == Export
export default Header;