import React, { useState } from 'react';
import CitySearch from '..//CitySearch/CitySearch';
import CurrentWeather from '..//CurrentWeather/CurrentWeather';
import WeatherForecast from '..//WeatherForecast/WeatherForecast';
import TemperatureToggle from '..//TemperatureToggle/TemperatureToggle';

// Dummy data for weather and forecast
const dummyData = {
  current: { temperature: 25, humidity: 50, windSpeed: 10, condition: 'Sunny' },
  forecast: [
    {   day: 'Mon', temperature: 27 },
    { day: 'Tue', temperature: 24 },
    { day: 'Wed', temperature: 26 },
    { day: 'Thu', temperature: 28 },
    { day: 'Fri', temperature: 29 }
  ]
};

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(dummyData);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit

  // Callback function to handle city search input
  const handleCitySearch = (searchedCity) => {
    setCity(searchedCity);
    // Simulate fetching data and updating the state
    setWeatherData(dummyData); // Replace with actual API call if needed
  };

  // Callback function to toggle temperature unit
  const handleToggleUnit = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <CitySearch onSearch={handleCitySearch} />
      <TemperatureToggle unit={unit} onToggle={handleToggleUnit} />
      <CurrentWeather data={weatherData.current} unit={unit} />
      <WeatherForecast forecastData={weatherData.forecast} unit={unit} />
    </div>
  );
}

export default WeatherDashboard;


