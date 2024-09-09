import React from 'react';

export default function Next5hoursData({ next5HoursData }) {
  console.log('🚀 ~ Next5hoursData ~ next5HoursData:', next5HoursData);
  // Your data for the next 5 hours
  //   const next5Hours = [
  //     { time: '07 AM', temperature: '28.4°C', condition: 'Partly Cloudy' },
  //     { time: '08 AM', temperature: '29.9°C', condition: 'Sunny' },
  //     { time: '09 AM', temperature: '31.4°C', condition: 'Partly Cloudy' },
  //     { time: '10 AM', temperature: '32.6°C', condition: 'Patchy rain nearby' },
  //     { time: '11 AM', temperature: '33.3°C', condition: 'Patchy light rain' },
  //   ];

  //   const [next5Hours, setNext5Hours] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   // Fetch the next 5 hours weather data when the component mounts
  //   useEffect(() => {
  //     const fetchNext5HoursData = async () => {
  //       try {
  //         const response = await fetch(
  //           'https://weather-api-backend-inky.vercel.app/api/v1/weather/next5hours/?lat=23.740416&lon=90.4134656'
  //         );
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         const data = await response.json();
  //         setNext5Hours(data.next_5_hours);
  //         setLoading(false);
  //       } catch (err) {
  //         setError(err.message);
  //         setLoading(false);
  //       }
  //     };

  //     fetchNext5HoursData();
  //   }, []);

  //   // If the data is still loading
  //   if (loading) {
  //     return <p>Loading next 5 hours data...</p>;
  //   }

  //   // If there was an error fetching the data
  //   if (error) {
  //     return <p>Error: {error}</p>;
  //   }

  return (
    <div>
      <div className="space-y-4">
        <p className="text-xl font-bold">Today</p>
        <div className="flex gap-x-2 flex-wrap space-y-2">
          {/* Dynamically render weather data for each hour */}
          {next5HoursData &&
            next5HoursData.map((hour, index) => (
              <div
                key={index}
                className={`rounded-md flex justify-center items-center px-4 py-2 w-[100px] ${
                  index === 0
                    ? 'bg-[#243A52] text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                <div className="space-y-2 text-center">
                  <p>{index === 0 ? 'Now' : hour.time}</p>
                  {/* The background color changes based on weather condition */}
                  <p
                    className={`h-[30px] w-[30px] rounded-full ${
                      hour.condition.includes('Sunny')
                        ? 'bg-yellow-400'
                        : hour.condition.includes('Cloudy')
                        ? 'bg-gray-400'
                        : 'bg-blue-400'
                    }`}
                  ></p>
                  <p>{hour.temperature}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
