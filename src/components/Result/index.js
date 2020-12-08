// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Container, ListGroup } from 'react-bootstrap';
import 'chartjs-plugin-datalabels';

// == Import
import './style.scss';


// == Composant
const ResultView = ({ labels, data, transactions }) => {

    const dataFriends = {
        labels,
        datasets: [
          {
            label: 'Répartition',
            backgroundColor: '#42D88B',
            borderColor: '#25774D',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data
          }
        ],
        options: {
            plugins: {
                datalabels: {
                   display: true,
                   color: 'black'
                },
                formatter: function(value, context) {
                    return context.dataIndex + ': ' + Math.round(value*100) + '€';//FIXME:
                }
            }
        }
    }

return (
    <Container className={ResultView.name.toLowerCase()}>
        <h2 className="result__title">Les rouges doivent aux verts</h2>
        <Container className="result__graph result__container">
            <Bar
            data={dataFriends}
            width={100}
            height={50}
            options={{
                maintainAspectRatio: false
            }}
            />
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
};

ResultView.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    transactions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// == Export
export default ResultView;