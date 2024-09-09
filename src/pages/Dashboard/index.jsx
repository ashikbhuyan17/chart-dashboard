import { useEffect, useState } from 'react';
import DashboardMapData from '../../components/DashboardMapData';
const Dashboard = () => {
  const [location, setLocation] = useState({ lat: null, long: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);
  return (
    <>
      {/* <div>
        <h2>Your Location</h2>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <p>
            Latitude: {location.lat}, Longitude: {location.long}
          </p>
        )}
      </div> */}
      <DashboardMapData lat={location.lat} lon={location.long} />
    </>
  );
};

export default Dashboard;
