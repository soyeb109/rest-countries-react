import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries();
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country.name.common} </h3>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h4>
        Independent:{" "}
        {country.independent === true ? "Independent" : "Not Independent"}
      </h4>
      <h2>Population: {country.population}</h2>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
