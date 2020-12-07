// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Container  } from 'react-bootstrap';
import 'chartjs-plugin-datalabels';

// == Import
// import './style.scss';


// == Composant
const ResultView = ({ labels, data, transactions }) => {

    const dataFriends = {
        labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
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
                   color: 'white'
                },
                formatter: function(value, context) {
                    return context.dataIndex + ': ' + Math.round(value*100) + '€';//FIXME:
                }
            }
        }
    }

return (
    <Container className={ResultView.name.toLowerCase()}>
        Les rouges doivent aux verts
        <Bar
          data={dataFriends}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
        Comment équilibrer ?
        {
            transactions.map((transac) => (
                <p key={transac}>{transac}</p>
            ))
        }
    </Container>
);
};

ResultView.propTypes = {
    labels: PropTypes.array,
    data: PropTypes.array,
    transactions: PropTypes.array,
};

// == Export
export default ResultView;