import Desti from "./Components/destination/Desti";
import Hero from "./Components/HeroPage/Hero";
import Navbar from "./Components/navbar/Navbar";
import Search from "./Components/search/Search";
import Selects from "./Components/Selects/Selects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Desti />
      <Search />
      <Selects />
    </div>
  );
}

export default App;
