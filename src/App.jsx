import "./App.css";
import Intro from "./components/Intro/Intro";
import Counter from "./components/Counter/Counter";
import Countries from "./components/Countries/Countries";
import Courses from "./components/Courses/Courses";
/* import Fruits from "./components/Fruits/Fruits";
import Languages from "./components/Languages/Languages";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
import RandomUser from "./components/RandomUser/RandomUser";
import Users from "./components/Users/Users"; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Intro />
        </nav>
      </header>

      <main>
        <Counter />

        {/* Used with restcountries API */}
        <Countries />

        <Courses />

        {/* <Fruits />

        <Languages /> */}

        {/* Used with jsonplaceholder API */}
        {/*         <Posts /> */}

        {/*         <Products /> */}

        {/* Used with randomuser API */}
        {/*         <RandomUser /> */}

        {/* Used with jsonplaceholder API */}
        {/*         <Users /> */}
      </main>
    </div>
  );
}

export default App;
