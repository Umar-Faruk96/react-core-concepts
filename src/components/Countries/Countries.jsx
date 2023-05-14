import React, { useEffect, useState } from "react";
import CountryData from "../CountryData/CountryData";

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

  // ? add country features
  const [countryLength, setCountry] = useState([]);
  const handleAddCountry = (country) => {
    console.log(country);
    setCountry([...countryLength, country]);
  };

  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Country Component
      </h2>
      <h3>Country Loaded: {countries.length}</h3>

      {/* Country Data Component Build */}
      <CountryData countryData={countryLength} />

      {/* Country Component Build */}
      {countries.map((country) => (
        <Country
          country={country}
          key={country.cca3}
          handler={handleAddCountry}
        />
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
    btnStyle: {
      backgroundColor: "#eee",
      color: "#f62ed1",
      border: "none",
      borderRadius: "0.2rem",
      padding: "0.6rem",
      cursor: "pointer",
    },
  };

  // ? destructure styles object
  const { divStyle, headStyle, imgStyle, btnStyle } = countryStyle;

  // ? destructure country object
  const { name, flags, region, area, population, independent, startOfWeek } =
    props.country;

  // ? catch event handler
  const handleAddCountry = props.handler;

  return (
    <div style={divStyle}>
      <h5 style={headStyle}>
        Country : <b>{name.common}</b>
      </h5>
      <img style={imgStyle} src={flags.svg} alt={flags.alt} />
      <ul style={{ listStyle: "none" }}>
        <li>Region : {region}</li>
        <li>Population : {population}</li>
        <li>Area : {area} square miles</li>
        <li>Independent : {independent ? "Yes" : "No"}</li>
        <li>Start Of Week : {startOfWeek}</li>
      </ul>
      <button onClick={() => handleAddCountry(props.country)} style={btnStyle}>
        Add Country
      </button>
      {/* {console.log(props.country)} */}
    </div>
  );
};

export default Countries;
