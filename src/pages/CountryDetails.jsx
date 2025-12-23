import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryByName, getWeatherByCity } from "../services/api";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const countryData = await getCountryByName(name);
        setCountry(countryData);

        if (countryData.capital?.[0]) {
          const weatherData = await getWeatherByCity(countryData.capital[0]);
          setWeather(weatherData);
        }
      } catch (err) {
        setError("Failed to fetch country details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [name]);

  if (loading) return <p className="text-center mt-10">Loading details...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!country) return <p className="text-center mt-10">Country not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        &larr; Back
      </Link>

      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={country.flags?.svg}
          alt={country.name}
          className="w-full md:w-1/3 h-60 object-cover rounded"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">{country.name}</h2>
          <p>
            <span className="font-semibold">Official Name:</span>{" "}
            {country.name}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Subregion:</span>{" "}
            {country.subregion}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Area:</span>{" "}
            {country.area} km²
          </p>
          <p>
            <span className="font-semibold">Timezones:</span>{" "}
            {/* {country.timezones.join(", ")} */}
          </p>
        </div>
      </div>

      {weather && (
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h3 className="text-xl font-bold mb-2">
            Weather in {country.capital[0]}
          </h3>
          <p>
            <span className="font-semibold">Temperature:</span>{" "}
            {weather.main.temp} °C
          </p>
          <p>
            <span className="font-semibold">Weather:</span>{" "}
            {weather.weather[0].description}
          </p>
          <p>
            <span className="font-semibold">Humidity:</span>{" "}
            {weather.main.humidity}%
          </p>
          <p>
            <span className="font-semibold">Wind Speed:</span>{" "}
            {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
