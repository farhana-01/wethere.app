import React from "react";

const WeatherForecast = ({ weatherForecast }) => {
  return (
    <div className="weather-forecast">
      <h4>7-Day Weather Forecast</h4>
      {weatherForecast.map((weather) => (
        <div key={weather.id} className="forecast-item">
          <p>{weather.dayName}</p>
          <p>
            {weather.temp_max}°C / {weather.temp_min}°C
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
