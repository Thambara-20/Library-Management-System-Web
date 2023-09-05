// import logo from "./logo.svg";
import Header from "../../Components/Header/Header";
import Welcome from "../../Components/Welcome/Welcome";
import "./Home.css";
import Authors from "../../Components/Aurhors/Authors";
import Popular from "../../Components/PopularBooks/Popular";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import Value from "../../Components/Value/Value";
import Contact from "../../Components/ContactUs/Contact";
import GetStarter from "../../Components/FootGetStart/GetStarter";
import Footer from "../../Components/Footer/Footer";
import TextBanner from "../../Components/TextBanner/TextBanner"

function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Welcome />
      </div>
      <TextBanner/>
      <Popular />
      <Value />
      <NewArrivals />
      <Contact />
      <GetStarter/>
      <Footer/>
    </div>
  );
}

export default Home;
