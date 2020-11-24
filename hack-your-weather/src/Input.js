import React, { useState } from "react";

export default function Input({ changeUrl }) {
  const [cityName, setCityName] = useState("");
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeUrl(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
      }}
    >
      <input
        id="src-text"
        placeholder="Enter a valid city name"
        type="text"
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
      <input
        id="src-btn"
        disabled={cityName.length < 1}
        value="Search City"
        type="submit"
      />
    </form>
  );
}
