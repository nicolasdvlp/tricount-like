// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup } from 'react-bootstrap';
import 'chartjs-plugin-datalabels';

// == Import
import './style.scss';
import Graph from '../Graph';

// == Composant
const Result = ({ data, transactions }) => {
  return (
    <Container className={Result.name.toLowerCase()}>
      <h2 className="result__title">Les bleus doivent aux jaunes</h2>
      <Container className="result__graph result__container">
        <Graph data={data} />
      </Container>
      <Container className="result__equilibre result__container">
        <h2 className="result__title">Comment équilibrer ?</h2>
        <ListGroup as="ul">
          {
            transactions.map((transac) => <ListGroup.Item as="li" key={transac}>{transac}</ListGroup.Item>)
          }
        </ListGroup>
        <div className="result__emoji">🎉</div>
      </Container>
    </Container>
  );
}

Result.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// == Export
export default Result;