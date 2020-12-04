// == Import npm
import React from 'react';
import { Row, CardDeck, Button, Col, Container  } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import
// import './style.scss';
import UserCard from '../UserCard';

// == Composant
const UserList = ({ users, switchModal, addExpense }) => (
    <Container className={UserList.name.toLowerCase()}>
        <Row className="justify-content-center">
            <Col>
                <CardDeck>
                    {
                        users.map((user) => (
                            <UserCard  key={user.id} name={user.name} expenses={user.expenses} addExpense={() => {addExpense(user.id)}} />
                        ))
                    }
                </CardDeck>
            </Col>
            <Col style={{ maxWidth: '9rem' }} >
            <Button variant="info" onClick={switchModal}>Ajouter un utilisateur</Button>     
            </Col>
        </Row>
    </Container>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        expenses: PropTypes.array.isRequired,
    })),
    switchModal: PropTypes.func.isRequired,
    addExpense: PropTypes.func.isRequired,
};


// == Export
export default UserList;