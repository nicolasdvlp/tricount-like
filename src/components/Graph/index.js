import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import PropTypes from 'prop-types'

const MyResponsiveBar = ({ data }) => {
  console.log('graphdata :', data);

  return (
    <ResponsiveBar
      data={data}
      keys={['amount']}
      indexBy="name"
      margin={{ top: 0, right: 0, bottom: 50, left: 60 }}
      padding={0.2}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={bar => bar.data.color}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Nom',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Montant',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[]}
      isInteractive={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

MyResponsiveBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
}

export default MyResponsiveBar