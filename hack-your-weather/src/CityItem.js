import React from "react";

const CityItem = ({ cityData }) => {
  //const { name, sys, weather, main, coord } = cityData;
  const weather = cityData.weather;
  const name = cityData.name;
  const sys = cityData.sys;
  const coord = cityData.coord;
  const main = cityData.main;
  return (
    <li className="city-item">
      <h2>
        {name}, {sys.country}
      </h2>
      <div className="weather-desc">
        <h3>{weather[0].main}</h3>
        <p>{weather[0].description}</p>
        <p>min temp: {main.temp_min}</p>
        <p>max temp: {main.temp_max}</p>
        <p>
          location: {coord.lat}, {coord.lon}
        </p>
      </div>
    </li>
  );
};

export default CityItem;
