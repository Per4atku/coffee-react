import { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../redux/cartSlice";

import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

const ProductCard = ({ name, price, image, rating, hot_cold, color, id }) => {
  const dispatch = useDispatch();
  const [hot, setHot] = useState(null);
  const [inCart, setInCart] = useState(false);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    cart.forEach((item) => {
      if (item.id === id) {
        setInCart(true);
      }
    });
  }, [cart]);

  const getQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      if (item.id === id) {
        total = item.quantity;
      }
    });
    if (total === 0) {
      setInCart(false);
      setHot(null);
    }
    return total;
  };

  return (
    <div className="w-64 p-[14px_16px] bg-white rounded-xl justify-self-center xl:w-80 mui-md:mt-12">
      <div
        className="w-full h-44 rounded-xl bg-contain bg-center bg-no-repeat xl:h-56"
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
            <div className="text-accent font-medium text-xl tracking-[0.8px]">{price}$</div>
          </div>
          <div className="flex justify-between items-center self-end">
            <div className="flex gap-6">
              <button
                className="p-[1px_10px] rounded-lg border-2 border-solid font-semibold border-aqua text-aqua tracking-[0.64px] "
                style={{
                  borderColor: hot ? "#12463A" : "#4BB79E",
                  color: hot ? "#12463A" : "#4BB79E",
                }}
                onClick={() => {
                  !inCart && setHot(hot === true ? null : true);
                }}>
                Hot
              </button>
              <button
                className="p-[1px_10px] rounded-lg border-2 border-solid font-semibold border-aqua text-aqua tracking-[0.64px] "
                style={{
                  borderColor: hot ? "#4BB79E" : hot === null ? "#4BB79E" : "#12463A",
                  color: hot ? "#4BB79E" : hot === null ? "#4BB79E" : "#12463A",
                }}
                onClick={() => {
                  !inCart && setHot(hot === false ? null : false);
                }}>
                Cold
              </button>
            </div>
            {inCart ? (
              <div className="flex items-center gap-2 pb-3">
                <button
                  onClick={() => {
                    dispatch(decrementQuantity(id));
                  }}>
                  <HiOutlineMinusSm size={25} />
                </button>
                <span className="font-bold text-xl">{getQuantity()}</span>
                <button onClick={() => dispatch(incrementQuantity(id))}>
                  <HiOutlinePlusSm size={25} />
                </button>
              </div>
            ) : (
              <button
                className="w-10 h-10 rounded-[50%] bg-accent bg-[url(/assets/ui/cart-icon.svg)] bg-center bg-no-repeat"
                style={{ backgroundSize: "60%" }}
                onClick={() => {
                  dispatch(addToCart({ id, name, price, image, hot_cold, hot }));
                  setInCart(true);
                }}></button>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div className="text-[#111] text-xl tracking-[0.8px]">{name}</div>
          </div>
          <div className="flex justify-between items-center self-end">
            <div className="text-accent font-medium text-xl tracking-[0.8px]">{price}$</div>
            {inCart ? (
              <div className="flex items-center gap-2 pb-3">
                <button
                  onClick={() => {
                    dispatch(decrementQuantity(id));
                  }}>
                  <HiOutlineMinusSm size={25} />
                </button>
                <span className="font-bold text-xl">{getQuantity()}</span>
                <button onClick={() => dispatch(incrementQuantity(id))}>
                  <HiOutlinePlusSm size={25} />
                </button>
              </div>
            ) : (
              <button
                className="w-10 h-10 rounded-[50%] bg-accent bg-[url(/assets/ui/cart-icon.svg)] bg-center bg-no-repeat"
                style={{ backgroundSize: "60%" }}
                onClick={() => {
                  dispatch(addToCart({ id, name, price, image }));
                  setInCart(true);
                }}></button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
