import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h3>Name: {country.name.common} </h3>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default Country;
