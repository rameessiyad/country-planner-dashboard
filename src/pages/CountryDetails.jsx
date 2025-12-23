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
        const countryObj = countryData[0];
        setCountry(countryObj);

        if (countryObj?.capital?.[0]) {
          const weatherData = await getWeatherByCity(countryObj.capital[0]);
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

  if (loading)
    return (
      <p className="text-center mt-10 dark:text-white">Loading details...</p>
    );
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!country)
    return (
      <p className="text-center mt-10 dark:text-white">Country not found</p>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-300 dark:bg-slate-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-slate-700 transition-colors"
      >
        &larr; Back
      </Link>

      <div className="bg-white dark:bg-slate-900 shadow-lg border border-transparent dark:border-slate-800 rounded-lg p-6 flex flex-col md:flex-row gap-6 transition-colors">
        <img
          src={country.flags?.svg}
          alt={country.name.common}
          className="w-full md:w-1/3 h-60 object-cover rounded shadow-sm"
        />

        <div className="flex-1 dark:text-slate-300">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {country.name.common}
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Official Name:
              </span>{" "}
              {country.name?.official}
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Capital:
              </span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Region:
              </span>{" "}
              {country.region}
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Subregion:
              </span>{" "}
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Population:
              </span>{" "}
              {country.population?.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Area:
              </span>{" "}
              {country.area?.toLocaleString()} km²
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Timezones:
              </span>{" "}
              {country.timezones?.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {weather && (
        <div className="bg-white dark:bg-slate-900 shadow-lg border border-transparent dark:border-slate-800 rounded-lg p-6 mt-6 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            Weather in {country.capital[0]}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:text-slate-300">
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Temperature:
              </span>{" "}
              {weather.main.temp} °C
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Weather:
              </span>{" "}
              <span className="capitalize">
                {weather.weather[0].description}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Humidity:
              </span>{" "}
              {weather.main.humidity}%
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-slate-100">
                Wind Speed:
              </span>{" "}
              {weather.wind.speed} m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
