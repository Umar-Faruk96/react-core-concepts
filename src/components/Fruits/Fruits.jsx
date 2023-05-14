import React from "react";

// ~ Fruits Object
const fruits = [
  {
    name: "Sagor",
    origin: [
      { source: "Norshindi", price: "$2.5" },
      { source: "Tangail", price: "2.2" },
      { source: "Dinajpur", price: "2.2" },
      { source: "Mymonshingh", price: "1.9" },
    ],
  },
  {
    name: "Shobri",
    origin: [
      { source: "Faridpur", price: "$2.3" },
      { source: "Norshindi", price: "$2.2" },
      { source: "Jessore", price: "$2.0" },
      { source: "Natore", price: "$1.8" },
    ],
  },
  {
    name: "Bangla",
    origin: [
      { source: "Jhenydah", price: "$2.0" },
      { source: "Natore", price: "$1.6" },
      { source: "Norshingdi", price: "$1.4" },
    ],
  },
  {
    name: "Chapa",
    origin: [
      { source: "Kushtia", price: "$1.2" },
      { source: "Chapai NawabGonj", price: "1.0" },
      { source: "Jessore", price: "0.96" },
      { source: "Norshingdi", price: "0.95" },
      { source: "Rajshahi", price: "0.90" },
    ],
  },
  {
    name: "Nepali",
    origin: [
      { source: "Tangail", price: "$1.9" },
      { source: "Gazipur", price: "$1.8" },
    ],
  },
];

// ~ Fruits Component
const Fruits = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Fruits Component
      </h2>
      {fruits.map((fruitObj) => {
        return fruitObj.origin.map((origin) => {
          return <Fruit fruitOrigin={origin} fruitName={fruitObj}></Fruit>;
        });
      })}
    </div>
  );
};

// ^ Single Fruit Component
const Fruit = (props) => {
  const fruitStyle = {
    border: "2px solid yellow",
    borderRadius: "0.4rem",
    backgroundColor: "#428721",
    height: "40vh",
    width: "20vw",
    marginBottom: "0.5rem",
  };

  // ? destructuring the fruit array object
  const { name } = props.fruitName;
  const { source, price } = props.fruitOrigin;

  return (
    <div style={fruitStyle}>
      <h3>Name: {name}</h3>
      <h5>Source: {source}</h5>
      <h6>Price: {price}</h6>
      <button>Buy Now</button>
    </div>
  );
};
export default Fruits;
