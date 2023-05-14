import React from "react";

// ~ Country Data Component
const CountryData = (props) => {
  const countryData = props.countryData;

  // ? calculate population, area with 3 different methods

  // * area count with for loop
  let totalArea = 0;
  for (let i = 0; i < countryData.length; i++) {
    totalArea += countryData[i].area;
  }

  // * population count with forEach method
  /* let totalPopulation = 0;
  countryData.forEach((country) => {
    totalPopulation += country.population;
  }); */

  // * population count with reduce method
  const totalPopulation = countryData.reduce(
    (sum, country) => sum + country.population,
    0
  );

  return (
    <div>
      <h4>Country Added: {countryData.length}</h4>
      <p>Total Population: {totalPopulation}</p>
      <p>Total Area: {totalArea}</p>
    </div>
  );
};

export default CountryData;
