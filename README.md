# Country Explorer Dashboard

A modern, responsive React dashboard for exploring countries around the world. Users can view country details, filter by region and population, search with debouncing, mark favorites, and see weather information for capitals.

Built with **React**, **Tailwind CSS**, and **React Router DOM**, using data from **REST Countries API** and **OpenWeatherMap API**.

---

## Features

- **Country List:** Displays all countries in a responsive grid.
- **Country Details:** View detailed information including flag, capital, population, area, timezones, and more.
- **Favorites:** Add and remove countries to a favorites list.
- **Filters:** Filter countries by region and population.
- **Search:** Search countries with debouncing to reduce unnecessary API calls.
- **Weather Info:** Displays current weather for the capital city using OpenWeatherMap.
- **Pagination:** View countries with pagination for better UX.
- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Works on mobile, tablet, and desktop.

---

## Folder Structure
src/
├── components/
│ ├── CountryCard.jsx
│ ├── SearchBar.jsx
│ ├── Filters.jsx
├── pages/
│ ├── CountryList.jsx
│ ├── CountryDetails.jsx
│ ├── Favorites.jsx
├── services/
│ ├── api.js
├── context/
│ ├── FavoritesContext.jsx
├── App.jsx
└── Main.jsx

## APIs

1. **REST Countries API** - Fetch country data  
   Endpoint: `https://restcountries.com/v3.1/all`  

2. **OpenWeatherMap API** - Fetch weather for capitals  
   Endpoint: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`  

> ⚠️ The API key is stored in `.env` file for security.

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/country-explorer-dashboard.git
cd country-explorer-dashboard

Install dependencies

npm install


Create .env file

Copy .env.example to .env and add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_openweathermap_api_key


Start the development server

npm run dev


Open the app

Navigate to http://localhost:5173
 (Vite default) in your browser.
