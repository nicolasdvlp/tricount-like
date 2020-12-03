// == Import npm
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

// == Import
import PropTypes from 'prop-types';
// import './style.scss';

// == Composant
const UserCard = ({ name, expenses }) => {
return (
    <Card style={{ minWidth: '9rem' }}>
        <Card.Header>{name}</Card.Header>
        <ListGroup variant="flush">
            {
                expenses.map((expense) => (
                    <ListGroup.Item key={expense.id}>{expense.label} {expense.amount}</ListGroup.Item>
                ))                
            }
        </ListGroup>
    </Card>
);
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    expenses : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    })),
};

// == Export
export default UserCard;