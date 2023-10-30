import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import products from "../data/products.json";
import { Suspense, lazy } from "react";
import ProductCardSkeleton from "../mui/ProductCardSkeleton/ProductCardSkeleton";

import { Helmet, HelmetProvider } from "react-helmet-async";

const ProductCard = lazy(() => import("../components/ProductCard"));

const Menu = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Menu</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <section className="wrap mt-10 xl:mt-14">
        <div className="flex flex-col w-full max-w-[1300px] mx-auto">
          {products.map((category, index) => (
            <div key={index} id={category.id}>
              <h4 className="font-bold text-xl text-center py-2 mt-8">{category.name}</h4>
              <div className="grid grid-cols-1 gap-y-4 border-t border-solid border-p-gray pt-4 xs:gap-y-8 sm:grid-cols-2 md-lg:grid-cols-3 md:gap-x-8 md:mx-auto lg:grid-cols-3 lg:mx-0 xl:w-full">
                {category.list.map((product, index) => (
                  <Suspense key={index} fallback={<ProductCardSkeleton />}>
                    <ProductCard
                      key={index}
                      name={product.name}
                      price={product.price}
                      rating={product.rating}
                      image={product.image}
                      color={category.color}
                      hot_cold={product.hot_cold}
                      id={product.id}
                    />
                  </Suspense>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
