// == Import npm
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

// == Import
import PropTypes from 'prop-types';
import './style.scss';

// == Composant
const UserCard = ({ name, expenses, addExpense, totalUser, deleteUserModal }) => {
return (
    <Card style={{ minWidth: '9rem' }} className="cardP">
        <Card.Header className='cardP__header' >
            <span className="cardP__header--left">
                {name} 
            </span>
            <span className="cadP__header--right">
            <a onClick={addExpense} >
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle cardP__header_icons" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </a>
            <a onClick={deleteUserModal}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash cardP__header_icons" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </a>
            </span>
        </Card.Header>
        <ListGroup variant="flush">
            {
                expenses.map((expense) => (
                        <ListGroup.Item key={expense.id} className="cardP__body" >
                            <span className="cardP__body--left">
                                {expense.label}
                            </span>
                            <span className="cardP__body--right">
                                {expense.amount}
                            </span>
                        </ListGroup.Item>
                ))                
            }
            <ListGroup.Item className='cardP__footer'>
                <span className="cardP__body--left" >
                    Total
                </span>
                <span className="cardP__body--left" >
                    {totalUser}
                </span>
            </ListGroup.Item>
        </ListGroup>
    </Card>
);
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    addExpense: PropTypes.func.isRequired,
    expenses : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    })),
    totalUser: PropTypes.number.isRequired,
    deleteUserModal: PropTypes.func.isRequired,
};

// == Export
export default UserCard;