import React, { useState, useEffect } from "react";
import CityItem from "./CityItem";
import Input from "./Input";

export default function CitySrc() {
  const [url, setUrl] = useState();
  const [cityData, setCityData] = useState();
  const [cityId, setCityId] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({ status: false, message: "" });

  const changeUrl = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    const getCityWeather = async () => {
      //console.log("url", url);

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
            setCityData(data);
            setCityId(data.id);
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
      {cityData && <CityItem key={cityId} cityData={cityData} />}
      {hasError.status && <p className="Err">OOPS!!! {hasError.message}</p>}
      {isLoading && <p>Loading ...</p>}
    </div>
  );
}
