import React from "react";

const Filters = ({ region, setRegion, regions }) => {
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="p-2 mb-4 border rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white focus:ring-1"
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
