import React from "react";

const Filters = ({ region, setRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Regions</option>
      {regions.map((r) => (
        <option key={r} value={r}>
          {r}
        </option>
      ))}
    </select>
  );
};

export default Filters;
