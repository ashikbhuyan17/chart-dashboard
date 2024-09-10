import { instance } from './auth';

// export async function getFloatCartList() {
//   const data = await instance.get('/cart').then((res) => res.data);

//   return data?.data;
// }

// Example of making a request using the Axios instance
export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await instance.get(
      `/weather/details/?lat=${lat}&lon=${lon}`
    ); // Assuming the weather endpoint is at '/weather'
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchNext5HoursData = async (lat, lon) => {
  try {
    const response = await instance.get(
      `/weather/next5hours/?lat=${lat}&lon=${lon}`
    ); // Assuming the weather endpoint is at '/weather'
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
export const fetchExtremeWeather = async (lat, lon) => {
  try {
    const response = await instance.get(
      `/weather/extreme/?lat=${lat}&lon=${lon}`
    ); // Assuming the weather endpoint is at '/weather'
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchEvStations = async (lat, lon) => {
  try {
    const response = await instance.get(`/ev-stations/?lat=${lat}&lon=${lon}`); // Assuming the weather endpoint is at '/weather'
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
