import React from "react";
import { Link } from "react-router-dom";

const CityItem = ({ cityItem, setCityUl, cityUl }) => {
  const { name, sys, weather, main, coord } = cityItem;
  function handleRemove(id) {
    const newList = cityUl.filter((item) => item.id !== id);
    setCityUl(newList);
  }
  return (
    <>
      <button
        id="close"
        type="button"
        onClick={() => handleRemove(cityItem.id)}
      >
        X
      </button>
      <Link to={`/${cityItem.id}`}>
        {" "}
        <h2>
          {name}, {sys.country}
        </h2>
      </Link>
      <div className="weather-desc">
        <h3>{weather[0].main}</h3>
        <p>{weather[0].description}</p>
        <p>min temp: {main.temp_min}</p>
        <p>max temp: {main.temp_max}</p>
        <p>
          location: {coord.lat}, {coord.lon}
        </p>
      </div>
    </>
  );
};

export default CityItem;
