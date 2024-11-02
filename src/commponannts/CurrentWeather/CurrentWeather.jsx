import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <h4>Current Weather in {currentWeather.city}</h4>
      <p>Temperature: {currentWeather.temp_max}°C</p>
      <p>Humidity: {currentWeather.humidity}%</p>
      <p>Wind Speed: {currentWeather.windSpeed} km/h</p>
    </div>
  );
};

export default CurrentWeather;
