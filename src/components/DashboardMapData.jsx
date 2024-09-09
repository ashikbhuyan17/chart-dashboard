import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { useQuery } from '@tanstack/react-query';
import { fetchNext5HoursData, fetchWeatherData } from '../queries';
import WeatherChart from './Chart';
import Next5hoursData from './Next5hoursData';
export default function DashboardMapData({ lat, lon }) {
  const {
    isPending,
    error,
    isSuccess,
    isLoading,
    data: weatherData,
  } = useQuery({
    queryKey: ['floatCartList'],
    queryFn: () => fetchWeatherData(lat, lon),
    enabled: !!lat && !!lon,
  });
  console.log('🚀 ~ DashboardMapData ~ weatherData:', weatherData);

  const { data: next5HoursData } = useQuery({
    queryKey: ['fetchNext5Hours'],
    queryFn: () => fetchNext5HoursData(lat, lon),
    enabled: !!lat && !!lon,
  });
  console.log('____________', next5HoursData?.next_5_hours);

  //   const [weatherData, setWeatherData] = useState({
  //     location: 'Dhaka',
  //     current_time: '2024-09-09 13:10',
  //     current_temperature: '33.2°C',
  //     pressure: '1001.0 mb',
  //     wind_speed: '23.0 kph',
  //     next_3_days_forecast: [
  //       {
  //         date: '2024-09-09',
  //         morning_temp: 27.3,
  //         afternoon_temp: 33.4,
  //         evening_temp: 30.6,
  //         night_temp: 28.8,
  //       },
  //       {
  //         date: '2024-09-10',
  //         morning_temp: 26.5,
  //         afternoon_temp: 33.3,
  //         evening_temp: 30.4,
  //         night_temp: 28.5,
  //       },
  //       {
  //         date: '2024-09-11',
  //         morning_temp: 26.7,
  //         afternoon_temp: 30.2,
  //         evening_temp: 27.5,
  //         night_temp: 26.9,
  //       },
  //     ],
  //   });

  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   // Function to fetch weather data
  //   const fetchWeatherDetails = async () => {
  //     const url = `https://weather-api-backend-inky.vercel.app/api/v1/weather/details/?lat=23.740416&lon=90.4134656`;

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setWeatherData(data); // Update state with fetched data
  //     } catch (err) {
  //       setError(err.message); // Handle errors
  //     } finally {
  //       setLoading(false); // Stop loading state
  //     }
  //   };

  //   // useEffect to run fetch request when the component mounts
  //   useEffect(() => {
  //     fetchWeatherDetails();
  //   }, []);
  //   const canvasRef = useRef(null);

  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext('2d');

  //     // Gradient color - this week
  //     const gradientThisWeek = ctx.createLinearGradient(0, 0, 0, 150);
  //     gradientThisWeek.addColorStop(0, '#5555FF');
  //     gradientThisWeek.addColorStop(1, '#9787FF');

  //     // Gradient color - previous week
  //     const gradientPrevWeek = ctx.createLinearGradient(0, 0, 0, 150);
  //     gradientPrevWeek.addColorStop(0, '#FF55B8');
  //     gradientPrevWeek.addColorStop(1, '#FF8787');

  //     const multiply = {
  //       id: 'multiply',
  //       beforeDatasetsDraw(chart) {
  //         chart.ctx.globalCompositeOperation = 'multiply';
  //       },
  //       afterDatasetsDraw(chart) {
  //         chart.ctx.globalCompositeOperation = 'source-over';
  //       },
  //     };

  //     const config = {
  //       type: 'line',
  //       data: {
  //         labels: ['SUN', 'MON', 'TUE', 'WED'],
  //         datasets: [
  //           {
  //             label: 'Temperature',
  //             data: [20, 22, 14, 22],
  //             fill: false,
  //             borderColor: 'rgba(255, 255, 255, 0.2)',
  //             borderWidth: 2,
  //             pointBackgroundColor: 'transparent',
  //             pointBorderColor: '#FFFFFF',
  //             pointBorderWidth: 3,
  //             pointHoverBorderColor: 'rgba(255, 255, 255, 0.2)',
  //             pointHoverBorderWidth: 10,
  //             lineTension: 0,
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: false,
  //         elements: {
  //           point: {
  //             radius: 6,
  //             hitRadius: 6,
  //             hoverRadius: 6,
  //           },
  //         },
  //         plugins: {
  //           legend: {
  //             display: false,
  //           },
  //           tooltip: {
  //             backgroundColor: 'transparent',
  //             displayColors: false,
  //             bodyFontSize: 14,
  //             callbacks: {
  //               label(tooltipItems) {
  //                 return tooltipItems.formattedValue + '°C';
  //               },
  //             },
  //           },
  //         },
  //         scales: {
  //           x: {
  //             display: false,
  //           },
  //           y: {
  //             display: false,
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //       plugins: [multiply],
  //     };

  //     const chart = new Chart(ctx, config);

  //     return () => {
  //       chart.destroy();
  //     };
  //   }, []);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return (
    <div>
      <div className="flex max-xl:flex-col md:mt-10 justify-between xl:space-x-10 max-xl:space-y-5">
        <div className="w-full space-y-5">
          <div className="bg-[#243A52] p-4  flex justify-center max-md:space-y-4  rounded-md">
            <div className="text-white ">
              <div className="space-y-7 md:space-y-14">
                <div className="flex justify-between gap-x-5">
                  <p>{weatherData?.location}</p>
                  <p>
                    {' '}
                    {weatherData?.current_time.toLocaleString('en-US', options)}
                  </p>
                </div>
                <div>
                  <p className="text-[40px] md:text-[80px]">
                    {weatherData?.current_temperature}
                  </p>
                  <p>Mostly Clear</p>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                  <p>
                    <span>pressure : </span>
                    <span>{weatherData?.pressure}</span>
                  </p>
                  {/* <p>
                    <span>icon </span>
                    <span>32%</span>
                  </p> */}
                  <p>
                    <span>wind_speed: </span>
                    <span>{weatherData?.wind_speed}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="card basis-full md:basis-2/5 ">
              <div className="about">
                <p className="lead">Temperature in °C</p>
              </div>

              <canvas ref={canvasRef} width="300" height="200"></canvas>

              <div className="axis">
                <div className="tick">
                  <span className="day-number">20°C</span>
                  <span className="day-name">Morning</span>
                  <span className="value value--this">20°C</span>
                </div>
                <div className="tick">
                  <span className="day-number">22°C</span>
                  <span className="day-name">After noon</span>
                  <span className="value value--this">22°C</span>
                </div>
                <div className="tick">
                  <span className="day-number">14°C</span>
                  <span className="day-name">Evening</span>
                  <span className="value value--this">14°C</span>
                </div>
                <div className="tick">
                  <span className="day-number">22°C</span>
                  <span className="day-name">Night</span>
                  <span className="value value--this">22°C</span>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            {weatherData && (
              <WeatherChart
                next_3_days_forecast={weatherData?.next_3_days_forecast}
              />
            )}
          </div>
          <div className="flex justify-between max-xl:flex-wrap max-xl:space-y-4 xl:space-x-4">
            <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
              <div className="space-y-3">
                <p className="font-semibold text-lg">Wind </p>
                <p className="text-gray-400">Today wind speed</p>
                <p className="font-semibold text-lg">
                  {weatherData?.wind_speed}
                </p>
              </div>
              <div>
                <img src="/wind-removebg-preview.png" alt="" width={200} />
              </div>
            </div>
            <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
              <div className="space-y-3">
                <p className="font-semibold text-lg">Rain Chanse </p>
                <p className="text-gray-400">Today rain chanse</p>
                <p className="font-semibold text-lg">24%</p>
              </div>
              <div className="w-[200px] ml-6">
                <div className="circle-wrap">
                  <div className="inner-circle">Low</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between max-xl:flex-wrap max-xl:space-y-4 xl:space-x-4">
            <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
              <div className="space-y-3">
                <p className="font-semibold text-lg">Pressure </p>
                <p className="text-gray-400">Today Pressure</p>
                <p className="font-semibold text-lg">{weatherData?.pressure}</p>
              </div>
              <div>
                <img
                  src="/pressure.png"
                  alt=""
                  width={200}
                  style={{
                    height: '200px',
                  }}
                />
              </div>
            </div>
            <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
              <div className="space-y-3">
                <p className="font-semibold text-lg">UV Index </p>
                <p className="text-gray-400">Today UV Index</p>
                <p className="font-semibold text-lg">2</p>
              </div>
              <div className=" ml-6">
                <div className="circle-wrap">
                  <div className="inner-circle">Low</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md w-full p-4">
          <Next5hoursData next5HoursData={next5HoursData?.next_5_hours} />
          {/* <iframe
              width="100%"
              height="300"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              scrolling="no"
            ></iframe>
            <br /> */}
          <div className="my-5 relative ">
            <img src="/Google-Maps-2.jpg" alt="" width="100%" />
            <a
              href={`https://weather-api-backend-inky.vercel.app/api/v1/traffic-incidents-list/?lat=${lat}&lon=${lon}`}
              //   https://weather-api-backend-inky.vercel.app/api/v1/traffic-incidents-list/?lat=23.740416&lon=90.4134656
              target="_blank"
              className="bg-[#243A52] text-white w-[140px] rounded-md p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              Road Closer Info
            </a>
          </div>

          <div className="border p-2">
            <iframe
              src="https://map.worldweatheronline.com/?ref=websitehunt.co"
              width="100%"
              height="600"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
