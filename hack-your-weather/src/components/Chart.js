import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function WeatherChart({ match }) {
  const [cityList, setCityList] = useState([]);
  const [cityName, setCityname] = useState();
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${match.params.cityId}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const getCityWeather = async () => {
      if (url) {
        setLoading(true);
        try {
          const response = await fetch(url);
          console.log(response);
          setLoading(false);
          if (response.ok) {
            setError(false);
            const data = await response.json();
            setCityList(data.list);
            setCityname(data.city.name);
          } else {
            setError(true);
          }
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }
    };
    getCityWeather();
    // eslint-disable-next-line
  }, [url]);

  return (
    <div className="chart-container">
      <h2>5 days forecast in {cityName}</h2>
      {isLoading && <h3>Loading...</h3>}
      {hasError && (
        <p className="error-message">Something went wrong... {hasError}</p>
      )}

      <AreaChart
        className="chart"
        width={1000}
        height={500}
        data={cityList}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="dt_txt" />
        <YAxis dataKey="main.temp" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="main.temp"
          stroke="#990000"
          fill="#ff8000"
        />
      </AreaChart>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
