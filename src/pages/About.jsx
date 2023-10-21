import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import CoffeeShop from "./components/CoffeeShop";
import Header from "./components/Header";
import PopularProducts from "./components/PopularProducts";
import Discover from "./components/Discover";

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PopularProducts />
      <CoffeeShop />
      <Discover />
      <Footer />
    </>
  );
};

export default About;
