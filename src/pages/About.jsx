import { Suspense, lazy } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const CoffeeShop = lazy(() => import("./elements/CoffeeShop"));
import Header from "./elements/Header";
import PopularProducts from "./elements/PopularProducts";
const Discover = lazy(() => import("./elements/Discover"));
const Features = lazy(() => import("./elements/Features"));
const Base = lazy(() => import("./elements/Base"));
const Products = lazy(() => import("./elements/Products"));
const Blog = lazy(() => import("./elements/Blog"));
const Feedback = lazy(() => import("./elements/Feedback"));
const Reservation = lazy(() => import("./elements/Reservation"));
import LoadingIndicator from "../mui/LoadingIndicator/LoadingIndicator";

import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cotask Coffee</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Header />
      <PopularProducts />
      <Suspense fallback={<LoadingIndicator />}>
        <CoffeeShop />
        <Discover />
        <Base />
        <Features />
        <Products />
        <Blog />
        <Feedback />
        <Reservation />
      </Suspense>
      <Footer />
    </>
  );
};

export default About;
