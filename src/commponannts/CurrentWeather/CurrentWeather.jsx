import React from 'react';

function CurrentWeather({ data, unit }) {
  // Convert temperature based on selected unit
  const temperature =
    unit === 'F' ? (data.temperature * 9/5) + 32 : data.temperature;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°{unit}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
      <p>Condition: {data.condition}</p>
    </div>
  );
}

export default CurrentWeather;
