import Desti from "./Components/destination/Desti";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/HeroPage/Hero";
import ImgSlider from "./Components/imgSlider/ImgSlider";
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
      <ImgSlider />
      <Footer />
    </div>
  );
}

export default App;
