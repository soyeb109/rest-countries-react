import React, { use } from "react";
import Country from "./Country";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  console.log(countries);

  return (
    <div>
      <h1>Travelling Countries: {countries.length}</h1>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
}
