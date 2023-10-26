import { HiStar } from "react-icons/hi";

const products = [
  {
    name: "Espresso",
    price: "21 K",
    image: "https://i.ibb.co/ch6xk8m/espresso.png",
    rating: "4.8",
  },
  {
    name: "Vanilla Latte",
    price: "12 K",
    image: "https://i.ibb.co/FVRVLSV/latte.png",
    rating: "4.8",
  },
  {
    name: "Hazelnut Latte",
    price: "23 K",
    image: "https://i.ibb.co/rQ3jcZy/hazeinut.png",
    rating: "4.8",
  },
];

const PopularProducts = () => {
  return (
    <div className="wrap">
      <div className="relative bg-accent rounded-[0_0_65px_65px] w-full -top-32 xs:w-80 xs:mx-auto sm:w-full md:w-5/6 md:min-w-[650px] lg:max-w-[1200px] lg:w-[93%]">
        <div className="relative -top-24 grid grid-cols-1 grid-rows-3 gap-y-10 sm:grid-cols-[290px_1fr_290px] sm:grid-rows-2 sm:[&>*:nth-child(2)]:col-start-3 lg:flex lg:justify-around ">
          {products.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
          <div className="m-auto w-72 h-40 hidden bg-[url(/assets/logo-l.svg)] col-start-3 bg-center bg-contain bg-no-repeat opacity-20 sm:block lg:hidden"></div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, rating, price, image }) => {
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

export default PopularProducts;
