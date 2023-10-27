import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import products from "../data/products.json";
import { HiStar } from "react-icons/hi";

const Menu = () => {
  return (
    <>
      <Navbar />
      <section className="wrap mt-10 xl:mt-14">
        <div className="flex flex-col w-full max-w-[1300px] mx-auto">
          {products.map((category, index) => (
            <div key={index}>
              <h4 className="font-bold text-xl text-center py-2 mt-8">Whole beans</h4>
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

const ProductCard = ({ name, price, image, rating, hot_cold, color }) => {
  return (
    <div className="w-64 p-[14px_16px] bg-white rounded-xl justify-self-center lg:w-80 lg:mt-12">
      <div
        className="w-full h-44 rounded-xl bg-contain bg-center bg-no-repeat lg:h-56"
        style={{ backgroundImage: `url(${image})`, backgroundColor: `${color}` }}>
        <div className="relative top-3 left-1 flex w-16 h-8 p-[3px_4px] items-center justify-center rounded-3xl bg-gradient-to-r from-[#ffffffb3] to-[#ffffff66] backdrop-blur-[2px]">
          <div className="flex justify-center items-center text-[#111] bg-white w-full h-full rounded-3xl text-sm font-bold tracking-[0.56px]">
            {rating} <HiStar color="#FFD057" />
          </div>
        </div>
      </div>
      {hot_cold ? (
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div className="text-[#111] text-xl tracking-[0.8px]">{name}</div>
            <div className="text-accent font-medium text-xl tracking-[0.8px]">{price}</div>
          </div>
          <div className="flex justify-between items-center self-end">
            <div className="flex gap-6">
              <button className="p-[1px_10px] rounded-lg border-2 border-solid font-semibold border-aqua text-aqua tracking-[0.64px] ">
                Hot
              </button>
              <button className="p-[1px_10px] rounded-lg border-2 border-solid font-semibold border-aqua text-aqua tracking-[0.64px] ">
                Cold
              </button>
            </div>
            <button className="w-10 h-10 rounded-[50%] bg-accent"></button>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div className="text-[#111] text-xl tracking-[0.8px]">{name}</div>
          </div>
          <div className="flex justify-between items-center self-end">
            <div className="text-accent font-medium text-xl tracking-[0.8px]">{price}</div>
            <button className="w-10 h-10 rounded-[50%] bg-accent"></button>
          </div>
        </div>
      )}
    </div>
  );
};

const WholeBeansCard = ({ name, price, image, rating }) => {
  return (
    <div className="w-64 p-[14px_16px] bg-white rounded-xl justify-self-center lg:w-80 lg:mt-12">
      <div
        className="w-full h-44 bg-[#C69C5E] rounded-xl bg-contain bg-center bg-no-repeat lg:h-56"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="relative top-3 left-1 flex w-16 h-8 p-[3px_4px] items-center justify-center rounded-3xl bg-gradient-to-r from-[#ffffffb3] to-[#ffffff66] backdrop-blur-[2px]">
          <div className="flex justify-center items-center text-[#111] bg-white w-full h-full rounded-3xl text-sm font-bold tracking-[0.56px]">
            {rating} <HiStar color="#FFD057" />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <div className="text-[#111] text-xl tracking-[0.8px]">{name}</div>
        </div>
        <div className="flex justify-between items-center self-end">
          <div className="text-accent font-medium text-xl tracking-[0.8px]">{price}</div>
          <button className="w-10 h-10 rounded-[50%] bg-accent"></button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
