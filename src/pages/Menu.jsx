import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import products from "../data/products.json";
import { HiStar } from "react-icons/hi";

const Menu = () => {
  console.log(products);
  return (
    <>
      <Navbar />
      <section className="wrap max-w-[1200px] mx-auto">
        <div className="flex flex-col">
          <h4 className="font-bold text-xl text-center py-2">Coffee Drinks</h4>
          <div className="grid grid-cols-[256px] gap-y-6 mx-auto border-t pt-5 border-solid border-p-gray sm:grid-cols-[256px_256px] sm:gap-x-8">
            {products["coffee-drinks"].map((product, index) => (
              <CoffeeDrinkCard
                key={index}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const CoffeeDrinkCard = ({ name, price, image, rating }) => {
  return (
    <div className="w-64 p-[14px_16px] bg-white rounded-xl justify-self-center xl:w-80">
      <div
        className="w-full h-44 bg-aqua rounded-xl bg-contain bg-center bg-no-repeat xl:h-56"
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
    </div>
  );
};

export default Menu;
