import "./App.css";
import Countries from "./components/Countries/Countries";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Intro */}
        <Intro></Intro>

        {/* Country component with restcountries API */}
        <Countries></Countries>
      </header>
    </div>
  );
}

export default App;
