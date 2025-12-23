import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
import Favorites from "./pages/Favorites";
import { HiMoon, HiSun } from "react-icons/hi";

const App = () => {
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-800">
      <nav className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between">
        <Link to="/" className="font-bold text-xl dark:text-white">
          Country Explorer
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 hover:ring-2 ring-blue-400 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>

          {location.pathname !== "/favorites" && (
            <Link
              to="/favorites"
              className="text-white bg-linear-to-r from-blue-500 to-blue-700 px-4 py-2 rounded font-medium"
            >
              Favorites
            </Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:name" element={<CountryDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
