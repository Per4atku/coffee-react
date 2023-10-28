import { HiStar } from "react-icons/hi";

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

export default ProductCard;
