// == Import npm
import React from 'react';
import { Form  } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import UserList from '../../containers/UserList';
import ResultView from '../../containers/Result'

// == Composant
const Main = ({ switchResultPage, clickChangeView }) => {
    return (
        <main className="main">
            <div className="main__swich">
                <Form.Switch 
                    type="switch"
                    id="custom-switch"
                    label="Check this switch" 
                    checked={switchResultPage}
                    onChange={clickChangeView}
                />
            </div>
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