import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import Header from "./components/Header";
import PopularProducts from "./components/PopularProducts";

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      {<PopularProducts />}
      <Footer />
    </>
  );
};

export default About;
