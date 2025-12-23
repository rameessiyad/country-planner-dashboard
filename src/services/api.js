import axios from "axios";

const COUNTRIES_BASE_URL = "https://restcountries.com/v3.1";

const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "ef543f302d9865d860dd490874641af9";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${COUNTRIES_BASE_URL}/all?fields=name,region,flags,population,capital,images`);
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
