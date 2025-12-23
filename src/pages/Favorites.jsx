import React from "react";
import CountryCard from "../components/CountryCard";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-gray-600">
        <h2 className="text-2xl font-semibold mb-2">No favorites yet ❤️</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Start adding countries to your favorites
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Favorite Countries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
