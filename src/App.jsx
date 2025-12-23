import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
import Favorites from "./pages/Favorites";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between">
        <Link to="/" className="font-bold text-xl">
          Country Explorer
        </Link>

        {location.pathname !== "/favorites" && (
          <Link
            to="/favorites"
            className="text-white bg-linear-to-r from-blue-500 to-blue-700 px-4 py-2 rounded font-medium"
          >
            Favorites
          </Link>
        )}
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
