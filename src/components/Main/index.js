// == Import npm
import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import
import UserList from '../UserList'
import './style.scss';

// == Composant
const Main = ({ data }) => {
    return (
    <Container className={Main.name.toLowerCase()}>
        <UserList list={data} />
    </Container>
)};

Main.propTypes = {
    data: PropTypes.array,
}

// == Export
export default Main;