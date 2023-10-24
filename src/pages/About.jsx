import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import CoffeeShop from "./components/CoffeeShop";
import Header from "./components/Header";
import PopularProducts from "./components/PopularProducts";
import Discover from "./components/Discover";
import Features from "./components/Features";
import Base from "./components/Base";
import Products from "./components/Products";

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PopularProducts />
      <CoffeeShop />
      <Discover />
      <Base />
      <Features />
      <Products />
      <Footer />
    </>
  );
};

export default About;
