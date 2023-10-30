import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Delivery = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Delivery</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <section className="wrap">
        <h3 className="text-center">Empty delivery page</h3>
        <img
          src="https://media.tenor.com/Fr1Rd7pazC8AAAAd/nice-cat.gif"
          alt="cat gif"
          className="mx-auto"
        />
      </section>
      <Footer />
    </>
  );
};

export default Delivery;
