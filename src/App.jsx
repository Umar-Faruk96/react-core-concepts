import "./App.css";
import Countries from "./components/Countries/Countries";
import Intro from "./components/Intro/Intro";
import Counter from "./components/Counter/Counter";
import Courses from "./components/Courses/Courses";
import Fruits from "./components/Fruits/Fruits";
import Languages from "./components/Languages/Languages";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
// import RandomUser from "./components/RandomUser/RandomUser";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Intro */}
        <Intro></Intro>

        {/* Country component with restcountries API */}
        <Countries></Countries>

        {/* Counter component */}
        <Counter></Counter>

        {/* Courses component */}
        <Courses></Courses>

        {/* Fruits component */}
        <Fruits></Fruits>

        {/* Languages component */}
        <Languages></Languages>

        {/* Posts component */}
        <Posts></Posts>

        {/* Product component */}
        <Products></Products>

        {/* Random User component */}
        {/* <RandomUser></RandomUser> */}

        {/* Users Component */}
        <Users></Users>
      </header>
    </div>
  );
}

export default App;
