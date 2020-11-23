import React, { useState, useEffect } from "react";
import CityItem from "./CityItem";
import Input from "./Input";

export default function CitySrc() {
  const [cityUl, setCityUl] = useState([]);
  const [url, setUrl] = useState();
  const [cityData, setCityData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({ status: false, message: "" });

  const changeUrl = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    const getCityWeather = async () => {
      if (url) {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            setError(true, "response ok!");
          } else {
            setError({ status: false, message: "" });
            const data = await response.json();
            console.log(data);
            setCityUl([data, ...cityUl]);
            console.log(cityUl);

            setLoading(false);
          }
        } catch (error) {
          setError({ status: true, message: error.message });
          setLoading(false);
        }
      }
    };
    getCityWeather();
  }, [url]);
  return (
    <div className="src-container">
      <Input changeUrl={changeUrl} />
      <ul id="city-ul">
        {cityUl &&
          cityUl.map((cityItem) => {
            return (
              <li className="city-item" key={cityItem.id}>
                <CityItem
                  cityData={cityItem}
                  setCityUl={setCityUl}
                  cityUl={cityUl}
                />
              </li>
            );
          })}
      </ul>
      {hasError.status && <p className="Err">OOPS!!! {hasError.message}</p>}
      {isLoading && <p>Loading ...</p>}
    </div>
  );
}
