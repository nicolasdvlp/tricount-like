// == Import npm
import React from 'react';
import { Row, CardDeck, Button, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import UserCard from '../UserCard';

// == Composant
const Main = ({ main, switchModal }) => {
    const { users } = main;
    return (
        <Container className={Main.name.toLowerCase()}>
        
            <Row className="justify-content-center">
                <Col>
                    <CardDeck>
                        {
                            users.map((user) => (
                                <UserCard  key={user.id} name={user.name} expenses={user.expenses} />
                            ))
                        }
                    </CardDeck>
                </Col>
                <Col style={{ maxWidth: '9rem' }} >
                <Button variant="info" onClick={() => switchModal(true)}>Ajouter un utilisateur</Button>     
                </Col>

            </Row>
        </Container>
)};

Main.propTypes = {
    main: PropTypes.object.isRequired,
    switchModal: PropTypes.func.isRequired

    //TODO PropTypes.shape({
        // users: PropTypes.arrayOf(PropTypes.shape({
            // id: PropTypes.number.isRequired,
            // name: PropTypes.string.isRequired,
            // expenses: PropTypes.array.isRequired,
        // })),
    // }))
};


// == Export
export default Main;