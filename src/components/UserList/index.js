// == Import npm
import React from 'react';
import { Row, CardDeck } from 'react-bootstrap';

// == Import
import UserCard from './UserCard'
import PropTypes from 'prop-types';
// import './style.scss';

// == Composant
const UserList = ({list}) => {
return (
    <div className={UserList.name.toLowerCase()}>
        <Row className="justify-content-center">
            <CardDeck>
                {
                    list.map((user) => (
                        <UserCard  key={user.id} name={user.name} expenses={user.expenses} />
                    ))
                }
            </CardDeck>
        </Row>
    </div>
);
};

UserList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        expenses: PropTypes.array.isRequired,
    }))
};

// == Export
export default UserList;