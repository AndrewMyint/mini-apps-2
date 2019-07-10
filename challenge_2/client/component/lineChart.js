import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const dummyData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 1000, 56, 55, 40],
    },
  ],
};

const LineChart = () => {
  const [currency, setCurrency] = useState({});

  const fetchApi = async () => {
    const apiCall = await fetch('/bpi');
    const apiData = await apiCall.json();
    dummyData.labels = apiData.date;
    dummyData.datasets[0].data = apiData.price;
    setCurrency(dummyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <Line data={currency} width={100} height={500} options={{ maintainAspectRatio: false }} />
      </div>
    </>
  );
};

export default LineChart;

// LineChart.propTypes = {
//   data: PropTypes.instanceOf(Object).isRequired,
//   setData: PropTypes.func.isRequired,
// };
