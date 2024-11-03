
import React from "react";

const CurrentWeather = ({ data }) => {

  if (!data) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="current-weather">
      <h3>Current Weather in {data.city}</h3>
      <p>Day: {data.dayName}</p>
      <p>Max Temperature: {data.temp_max}°C</p>
      <p>Min Temperature: {data.temp_min}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
    </div>
  );
};

export default CurrentWeather;
