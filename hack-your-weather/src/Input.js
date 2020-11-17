import React, { useState } from "react";

export default function Input({ changeUrl }) {
  const [cityName, setCityName] = useState("");
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  console.log(API_KEY);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeUrl(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
      }}
    >
      <div>
        <input
          type="text"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
      </div>
      <input type="submit"></input>
    </form>
  );
}
