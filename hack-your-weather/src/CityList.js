import cityData from "./city-weather.json";
import CityItem from "./CityItem";
const CityList = () => {
  return (
    <ul className="city-list">
      {cityData.map((city) => (
        <CityItem key={city.id} cityData={city} />
      ))}
    </ul>
  );
};

export default CityList;
