
import React, { useState } from "react";
import City from "../City/city";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import CurrentWeather from "../CurrentWeather/currentWeather";
import "../styled/style.css";

const weatherData = [
  {
    id: 4,
    city: "sukkur",
    dayName: "Sun",
    temp_max: 34,
    temp_min: 24,
    humidity: 65,
    windSpeed: 15,
  },
  {
    id: 1,
    city: "pir-jo-goth",
    dayName: "Mon",
    temp_max: 32,
    temp_min: 22,
    humidity: 60,
    windSpeed: 10,
  },
  {
    id: 5,
    city: "khairpur",
    dayName: "Tue",
    temp_max: 30,
    temp_min: 20,
    humidity: 55,
    windSpeed: 8,
  },
  {
    id: 6,
    city: "unknown",
    dayName: "Wed",
    temp_max: 30,
    temp_min: 20,
    humidity: 55,
    windSpeed: 8,
  },
  {
    id: 7,
    city: "Hyderabad",
    dayName: "Thu",
    temp_max: 30,
    temp_min: 20,
    humidity: 55,
    windSpeed: 8,
  },
  {
    id: 2,
    city: "karachi",
    dayName: "Fri",
    temp_max: 31,
    temp_min: 21,
    humidity: 58,
    windSpeed: 12,
  },
  {
    id: 3,
    city: "lahore",
    dayName: "Sat",
    temp_max: 33,
    temp_min: 23,
    humidity: 62,
    windSpeed: 9,
  },
];

const Weather = () => {
  const [weatherForecast, setWeatherForecast] = useState(weatherData);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  const searchHandler = (search) => {
    const filteredData = weatherData.filter((item) =>
      item.city.toLowerCase().includes(search.toLowerCase())
    );

    setWeatherForecast(filteredData);
    setCurrentWeatherData(filteredData.length ? filteredData[0] : null);
  };

  return (
    <div className="weather-dashboard">
      <h2>Weather Dashboard</h2>
      <City searchHandler={searchHandler} />

     
      {currentWeatherData ? (
        <CurrentWeather data={currentWeatherData} />
      ) : (
        <p>No data found for this city.</p> 
      )}

      <WeatherForecast weatherForecast={weatherForecast} />
    </div>
  );
};

export default Weather;
