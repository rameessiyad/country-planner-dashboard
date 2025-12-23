import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

const toggleFavorite = (country) => {
  setFavorites((prev) => {
    const exists = prev.some(
      (c) => c.name.common === country.name.common
    );

    if (exists) {
      return prev.filter(
        (c) => c.name.common !== country.name.common
      );
    } else {
      return [...prev, country];
    }
  });
};

const isFavorite = (name) => {
  return favorites.some(
    (c) => c.name.common === name
  );
};


  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
