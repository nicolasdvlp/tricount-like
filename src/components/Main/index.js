// == Import npm
import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import UserList from '../../containers/UserList';
import ResultView from '../../containers/Result'

// == Composant
const Main = ({ switchResultPage, clickChangeView }) => {
    return (
        <main className="main">
            <Container className="justify-content-md-center main__containerswitch">
                <Nav variant="pills" className="main__switch" >
                    <Nav.Item>
                        <Nav.Link  active={!switchResultPage}
                        onClick={clickChangeView}>Edition</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={switchResultPage}
                        onClick={clickChangeView}>Résultat</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            {
                !switchResultPage && <UserList />
            }
            {
                switchResultPage && <ResultView />
            }
        </main>
)};

Main.propTypes = {
    switchResultPage: PropTypes.bool.isRequired,
    clickChangeView: PropTypes.func.isRequired,
};


// == Export
export default Main;