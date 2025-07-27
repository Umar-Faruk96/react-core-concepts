// ~ Country Data Component
const CountryData = (props) => {
  const countryData = props.countryData;

  // * area count
  let totalArea = 0;
  for (let i = 0; i < countryData.length; i++) {
    totalArea += countryData[i].area;
  }

  // * population count
  /* let totalPopulation = 0;
  countryData.forEach((country) => {
    totalPopulation += country.population;
  }); */

  // * population count
  const totalPopulation = countryData.reduce(
    (sum, country) => sum + country.population,
    0
  );

  return (
    <>
      <h4>Country Addition Count: {countryData.length}</h4>
      <p>Total Population: {totalPopulation}</p>
      <p>Total Area: {totalArea}</p>
    </>
  );
};

export default CountryData;
