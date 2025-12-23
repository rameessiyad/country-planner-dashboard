import axios from "axios";

const COUNTRIES_BASE_URL = import.meta.env.VITE_COUNTRIES_BASE_URL;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getAllCountries = async () => {
  try {
    const response = await axios.get(
      `${COUNTRIES_BASE_URL}/all?fields=name,region,flags,population,capital,images,id`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching countries", error);
    throw error;
  }
};

export const getCountryByName = async (name) => {
  try {
    const response = await axios.get(`${COUNTRIES_BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching country ${name}:`, error);
    throw error;
  }
};

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(
      `${WEATHER_BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather for ${city}:`, error);
    throw error;
  }
};
