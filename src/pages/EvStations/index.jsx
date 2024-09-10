import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { fetchEvStations, fetchWeatherData } from '../../queries';

export default function EvStations() {
  const [location, setLocation] = useState({ lat: null, long: null });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      setErrors('Geolocation is not supported by this browser.');
    }
  }, []);

  const { isPending, error, isSuccess, isLoading, data } = useQuery({
    queryKey: ['fetchEvStationsData'],
    queryFn: () => fetchEvStations(location.lat, location.long),
    enabled: !!location.lat && !!location.long,
  });

  console.log('🚀 ~ EvStations ~ data:', data);
  return (
    <div>
      <a href="/" className="bg-gray-300 rounded-full py-2 px-3">
        Back To Home{' '}
      </a>
      <div>{data && <div dangerouslySetInnerHTML={{ __html: data }} />}</div>
    </div>
  );
}
