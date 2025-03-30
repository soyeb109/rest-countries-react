import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";

export default function Countries({ countriesPromise }) {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <h1>Travelling Countries: {countries.length}</h1>
      <h3>Traveled So Far: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </>
  );
}
