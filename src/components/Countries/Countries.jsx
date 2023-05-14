import React, { useEffect, useState } from "react";

// ~ Countries Component
const Countries = () => {
  // ? use state to hold the current data state
  const [countries, setCountries] = useState([]);

  // ? fetch data from restCountries API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Country Loaded: {countries.length}</h2>

      {/* Single Country Build */}
      {countries.map((country) => (
        <Country country={country} key={country.cca3}></Country>
      ))}
    </div>
  );
};

// ^ Single Country Component
const Country = (props) => {
  // ? style country component
  const countryStyle = {
    divStyle: {
      border: "2px solid #4523fe",
      borderRadius: "0.5rem",
      padding: "0.6rem",
      margin: "0.8rem",
      width: "40vw",
      backgroundColor: "#d52e50",
    },
    headStyle: { marginBottom: "8px" },
    imgStyle: { width: "10vw" },
  };

  // ? destructure styles object
  const { divStyle, headStyle, imgStyle } = countryStyle;

  // ? destructure country object
  const { name, flags, region, area, population, independent, startOfWeek } =
    props.country;
  return (
    <div style={divStyle}>
      <h3 style={headStyle}>
        Country : <b>{name.common}</b>
      </h3>
      <img style={imgStyle} src={flags.svg} alt={flags.alt} />
      <ul style={{ listStyle: "none" }}>
        <li>Region : {region}</li>
        <li>Population : {population}</li>
        <li>Area : {area} square miles</li>
        <li>Independent : {independent ? "Yes" : "No"}</li>
        <li>Start Of Week : {startOfWeek}</li>
      </ul>
      {console.log(props.country)}
    </div>
  );
};

export default Countries;
