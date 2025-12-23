import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

const CountryCard = ({ country }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(country.name.common);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(country);
  };

  return (
    <Link to={`/country/${country.name.common}`} className="group relative">
      <div className="border border-gray-200 dark:border-slate-700 rounded-lg shadow-md overflow-hidden bg-white dark:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:shadow-slate-900/50">
        <div className="relative">
          <img
            src={country.flags?.svg}
            alt={country.name.common}
            className="w-full h-42 object-cover hover:scale-110 transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaEye className="text-white text-3xl" />
          </div>

          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 bg-white dark:bg-slate-700 rounded-full p-2 shadow hover:scale-110 transition-transform"
          >
            {favorite ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-gray-600 dark:text-gray-300 text-lg" />
            )}
          </button>
        </div>

        <div className="p-4 dark:text-slate-200">
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
            {country.name.common}
          </h3>
          <p className="text-gray-700 dark:text-slate-400">
            <span className="font-semibold text-gray-900 dark:text-slate-200">
              Capital:
            </span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>
          <p className="text-gray-700 dark:text-slate-400">
            <span className="font-semibold text-gray-900 dark:text-slate-200">
              Region:
            </span>{" "}
            {country.region}
          </p>
          <p className="text-gray-700 dark:text-slate-400">
            <span className="font-semibold text-gray-900 dark:text-slate-200">
              Population:
            </span>{" "}
            {country.population?.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
