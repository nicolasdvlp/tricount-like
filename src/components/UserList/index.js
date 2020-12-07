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
            <Col style={{ maxWidth: '9rem' }} >
                <Button variant="info" onClick={switchModal}>Ajouter un utilisateur</Button>     
            </Col>            
            <Col>
                <CardDeck>
                    {
                        users.map((user) => {
                        
                            const totalUser = user.expenses.reduce((dollarbillyo, {amount}) => dollarbillyo + amount, 0);
                            return (
                                <UserCard  key={user.id} name={user.name} expenses={user.expenses} addExpense={() => {addExpense(user.id)}} totalUser={totalUser+0} />
                            )
                        })
                    }
                </CardDeck>
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