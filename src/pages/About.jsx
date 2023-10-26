import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import CoffeeShop from "./elements/CoffeeShop";
import Header from "./elements/Header";
import PopularProducts from "./elements/PopularProducts";
import Discover from "./elements/Discover";
import Features from "./elements/Features";
import Base from "./elements/Base";
import Products from "./elements/Products";
import Blog from "./elements/Blog";
import Feedback from "./elements/Feedback";
import Reservation from "./elements/Reservation";

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
      <Blog />
      <Feedback />
      <Reservation />
      <Footer />
    </>
  );
};

export default About;
