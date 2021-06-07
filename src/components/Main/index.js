// == Import npm
import React, { lazy, Suspense } from 'react';
import { Nav, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
// import UserList from '';
import ResultView from '../../containers/Result'

const UserList = lazy(() => import('../../containers/UserList'));

const renderLoader = () => <p>Loading</p>;

// == Composant
const Main = ({ switchResultPage, clickChangeView }) => {
  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === "ArrowRight") clickChangeView(true)
      if (event.key === "ArrowLeft") clickChangeView(false)
    });
  }, []);

  return (
    <main className="main">
      <Container className="justify-content-md-center main__containerswitch">
        <Nav variant="pills" className="main__switch" >
          <Nav.Item>
            <Nav.Link active={!switchResultPage}
              onClick={clickChangeView}>Edition</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={switchResultPage}
              onClick={clickChangeView}>Résultat</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      {
        !switchResultPage && (<Suspense fallback={renderLoader()}>
          <UserList />
        </Suspense>)
      }
      {
        switchResultPage && <ResultView />
      }
    </main>
  )
};

Main.propTypes = {
  switchResultPage: PropTypes.bool.isRequired,
  clickChangeView: PropTypes.func.isRequired,
};


// == Export
export default Main;