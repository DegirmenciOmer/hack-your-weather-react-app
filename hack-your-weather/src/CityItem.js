import React from "react";

const CityItem = ({ cityData, setCityUl, cityUl }) => {
  const { name, sys, weather, main, coord } = cityData;
  function handleRemove(id) {
    const newList = cityUl.filter((item) => item.id !== id);
    setCityUl(newList);
  }
  return (
    <>
      <button
        id="close"
        type="button"
        onClick={() => handleRemove(cityData.id)}
      >
        X
      </button>
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
    </>
  );
};

export default CityItem;
