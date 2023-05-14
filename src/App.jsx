import { useEffect, useState } from "react";
import "./App.css";

const teacherData = {
  name: `Jhankar Mahbub`,
  teaches: [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
  ],
};

const style = {
  fontFamily: "monospace",
  color: "#d36d63",
};

// ~ Product List Object
/* const products = [
  { name: "HTML", price: "$26.25", time: "3 Hours" },
  { name: "CSS", price: "32.33", time: "5 Hours" },
  { name: "JavaScript", price: "46.50", time: "6 Hours" },
  { name: "React", price: "55.55", time: "8 Hours" },
  { name: "PHP", price: "85.55", time: "12 Hours" },
]; */

/* const fruits = [
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
]; */

/* const languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "Vue",
  "MySQL",
]; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Core Understanding of <b style={style}>{teacherData.teaches[4]}</b>
        </h1>

        {/* random user APi User component build*/}
        {/* <RandomUser></RandomUser> */}

        {/* Posts component build with useState and useEffect react features */}
        {/* <Posts></Posts> */}

        {/* Users component build */}
        {/* <Users></Users> */}

        {/* Use State Component */}
        {/* <Counter></Counter> */}

        {/* Fruits component build */}
        {/* <h3>Fruits Component</h3>
        {fruits.map((fruitObj) => {
          return fruitObj.origin.map((origin) => {
            return <Fruit fruitOrigin={origin} fruitName={fruitObj}></Fruit>;
          });
        })} */}

        {/* Language component build */}
        {/* <h3>List of learning languages</h3>
        <ul style={{ listStyle: "none" }}>
          {languages.map((language) => (
            <li>{language}</li>
          ))}
        </ul> */}

        {/* Product component build */}
        {/* <h3>Product component</h3>
        {products.map((productObj) => (
          <Product product={productObj}></Product>
        ))} */}

        {/* Course component build 
        <Course subject="React Learning" topic="Component Creation"></Course>
        <Course
          subject="React Learning"
          topic="Component Creation Dynamically"
        ></Course>
        <Course
          subject="React Learning"
          topic="Dynamic Component Creation with style"
        ></Course>*/}
      </header>
    </div>
  );
}

// ^ Random User Component
/* const RandomUser = () => {
  const [users, setUser] = useState({});
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h3>Random User List: {users.results.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {users.results.map((user) => (
          <li>
            {user.name.title} {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}; */

// ^ Posts Component
/* const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  return (
    <div>
      <h3>Post Count: {post.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {post.map((singlePost) => (
          <li>{singlePost.title}</li>
        ))}
      </ul>
    </div>
  );
}; */

// ^ Users Component
/* const Users = () => {
  const [users, setUsers] = useState([]);
  // * Use react effect 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}; */

// * State declaration
/* const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 5);
  const btnStyle = {
    margin: "0.5rem",
  };
  return (
    <div>
      <h3>State Component</h3>
      <h4>Count: {count}</h4>
      <button onMouseMove={handleIncrease} style={btnStyle}>
        Increase
      </button>
      <button onMouseMove={() => setCount(count - 5)}>Decrease</button>
    </div>
  );
}; */

// ^ Product Component
/* const Product = (props) => {
  const productStyle = {
    border: "2px solid lime",
    borderRadius: "0.4rem",
    backgroundColor: "#215689",
    height: "40vh",
    width: "20vw",
    marginBottom: "0.5rem",
  };

  // & destructuring the product array object
  const { name, price, time } = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <h6>{time}</h6>
      <button>Buy Now</button>
    </div>
  );
}; */

// ^ Fruit Component
/* const Fruit = (props) => {
  const fruitStyle = {
    border: "2px solid yellow",
    borderRadius: "0.4rem",
    backgroundColor: "#428721",
    height: "40vh",
    width: "20vw",
    marginBottom: "0.5rem",
  };

  // & destructuring the fruit array object
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
}; */

// ^ Course Component
/* const Course = (props) => {
  // create style object to use css
  const styling = {
    border: "2px solid red",
    padding: "0.5rem",
    borderRadius: "0.2rem",
    margin: "0.4rem",
    width: "50vw",
  };
  console.log(props);
  return (
    <div style={styling}>
      <h2>Subject: {props.subject}</h2>
      <h3>Topic: {props.topic}</h3>
    </div>
  );
}; */

export default App;
