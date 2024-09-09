import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react/prop-types
const WeatherChart = ({ next_3_days_forecast }) => {
  console.log(
    '🚀 ~ WeatherChart ~ next_3_days_forecast:',
    next_3_days_forecast
  );
  const forecastData = {
    location: 'Dhaka',
    current_time: '2024-09-09 12:50',
    current_temperature: '33.4°C',
    pressure: '1002.0 mb',
    wind_speed: '23.8 kph',
    next_3_days_forecast: next_3_days_forecast ?? [],
  };

  // State to hold the current day index (default: 0, which is the first day)
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  // Function to update chart data based on user click
  const handleDayClick = (index) => {
    setCurrentDayIndex(index);
  };

  // Chart.js data object
  const currentDayForecast = forecastData.next_3_days_forecast[currentDayIndex];
  const chartData = {
    labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
    datasets: [
      {
        label: `Temperature for ${currentDayForecast.date}`,
        data: [
          currentDayForecast.morning_temp,
          currentDayForecast.afternoon_temp,
          currentDayForecast.evening_temp,
          currentDayForecast.night_temp,
        ],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temperature Forecast',
      },
    },
  };

  return (
    <div className="">
      {/* Chart displaying temperatures for selected day */}
      <Line data={chartData} options={options} />

      {/* Buttons to select between next 3 days */}
      <div style={{ marginTop: '20px' }}>
        {forecastData.next_3_days_forecast.map((day, index) => (
          <button
            key={day.date}
            onClick={() => handleDayClick(index)}
            style={{
              marginRight: '10px',
              padding: '10px',
              backgroundColor:
                currentDayIndex === index ? '#4caf50' : '#f0f0f0',
              color: currentDayIndex === index ? 'white' : 'black',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {day.date}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherChart;
