import React from 'react';

function WeatherForecast({ forecastData, unit }) {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {forecastData.map((day, index) => {
          const temperature =
            unit === 'F' ? (day.temperature * 9/5) + 32 : day.temperature;

          return (
            <li key={index}>
              <p>{day.day}: {temperature}°{unit}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WeatherForecast;
