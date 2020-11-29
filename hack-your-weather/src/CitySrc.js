import React, { useState, useEffect } from "react";
import CityItem from "./CityItem";
import Input from "./Input";

export default function CitySrc() {
  const [cityUl, setCityUl] = useState([]);
  const [url, setUrl] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({ status: false });

  const changeUrl = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    const getCityWeather = async () => {
      if (url) {
        setLoading(true);
        try {
          const response = await fetch(url);
          console.log(response);
          setLoading(false);
          if (response.ok) {
            setError({ status: false });
            const data = await response.json();
            console.log(data);
            setCityUl([data, ...cityUl]);
            console.log(cityUl);
          } else {
            setError(true);
          }
        } catch (error) {
          setError({ status: true });
          setLoading(false);
        }
      }
    };
    getCityWeather();
    // eslint-disable-next-line
  }, [url]);
  return (
    <div className="src-container">
      <Input changeUrl={changeUrl} />
      {hasError && <p className="error-message">City not found! {hasError}</p>}
      {isLoading && <p>Loading ...</p>}
      <ul id="city-ul">
        {cityUl &&
          cityUl.map((cityItem) => {
            return (
              <li className="city-item" key={cityItem.id}>
                <CityItem
                  cityItem={cityItem}
                  setCityUl={setCityUl}
                  cityUl={cityUl}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
