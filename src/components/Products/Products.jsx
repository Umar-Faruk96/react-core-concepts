import React from "react";

// ~ Product List Object
const products = [
  { name: "HTML", price: "$26.25", time: "3 Hours" },
  { name: "CSS", price: "32.33", time: "5 Hours" },
  { name: "JavaScript", price: "46.50", time: "6 Hours" },
  { name: "React", price: "55.55", time: "8 Hours" },
  { name: "PHP", price: "85.55", time: "12 Hours" },
];

// ~ Products Component
const Products = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Products Component
      </h2>
      {products.map((productObj) => (
        <Product product={productObj}></Product>
      ))}
    </div>
  );
};

// ^ Single Product Component
const Product = (props) => {
  const productStyle = {
    border: "2px solid lime",
    borderRadius: "0.4rem",
    backgroundColor: "#215689",
    height: "40vh",
    width: "20vw",
    marginBottom: "0.5rem",
  };

  // ? destructuring the product array object
  const { name, price, time } = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <h6>{time}</h6>
      <button>Buy Now</button>
    </div>
  );
};

export default Products;
