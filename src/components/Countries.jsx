import React, { use } from "react";
import Country from "./Country";
import "./Countries.css";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  console.log(countries);

  return (
    <>
      <h1>Travelling Countries: {countries.length}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </>
  );
}
