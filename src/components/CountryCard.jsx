import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={country.flags?.svg}
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{country.name.common}</h3>
        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p>
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
