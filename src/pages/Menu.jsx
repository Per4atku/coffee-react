import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import products from "../data/products.json";
import ProductCard from "../partials/ProductCard";

const Menu = () => {
  return (
    <>
      <Navbar />
      <section className="wrap mt-10 xl:mt-14">
        <div className="flex flex-col w-full max-w-[1300px] mx-auto">
          {products.map((category, index) => (
            <div key={index}>
              <h4 className="font-bold text-xl text-center py-2 mt-8">{category.name}</h4>
              <div className="grid grid-cols-1 gap-y-4 border-t border-solid border-p-gray pt-4 xs:gap-y-8 sm:grid-cols-2 md:grid-cols-[256px,256px] md:gap-x-8 md:mx-auto lg:grid-cols-2 lg:mx-0 min-[1100px]:grid-cols-3 xl:w-full">
                {category.list.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    color={category.color}
                    hot_cold={product.hot_cold}
                  />
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
