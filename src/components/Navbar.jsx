import { useState } from "react";
import { HiOutlineX, HiOutlineMenu, HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../redux/cartSlice";
import { Link, useLocation } from "react-router-dom";

const Cart = ({ itemsCount }) => {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className=" fixed bottom-2 right-5 md:relative">
      <div
        className="flex w-12 h-12 rounded-full shadow-3xl bg-white items-center justify-center
                   md:bg-transparent md:shadow-none">
        <button className="relative right-0.5" onClick={() => setToggleCart(!toggleCart)}>
          {toggleCart ? (
            <HiOutlineX size={30} color={"#12463a"} className="relative left-0.5" />
          ) : (
            <div>
              <img src="/assets/ui/cart-button.svg" alt="Cart button" />
              {itemsCount > 0 && (
                <svg
                  className="absolute -right-1 top-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none">
                  <circle cx="5" cy="5" r="4.5" fill="#E2EDE9" stroke="#4BB79E" />
                </svg>
              )}
            </div>
          )}
        </button>
      </div>
      {toggleCart && <CartContent setToggleCart={setToggleCart} />}
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const navLinks = [
    { name: "About us", path: "/" },
    { name: "Our Products", path: "/menu" },
    { name: "Delivery", path: "/delivery" },
    // Add more links as needed
  ];

  return (
    <nav className="wrap flex relative z-10  items-center justify-between h-20 bg-bg md:h-24 lg:h-32">
      <Link to="/" className="flex items-center gap-1 md:gap-2 lg:gap-2.5">
        <img src="/assets/logo.svg" alt="logo" className="w-3/6 lg:w-20 flex-shrink-0" />
        <div className=" text-accent text-lg sm:text-xl">Cotask</div>
      </Link>
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "text-accent font-bold" : ""}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Cart itemsCount={cart.length} />
      <button
        className="flex md:hidden"
        onClick={() => {
          setToggleMenu(true);
        }}>
        <HiOutlineMenu size={25} color={"#12463a"} />
      </button>
      {toggleMenu && (
        <div className="fade-in fixed bg-white flex justify-center items-center h-screen w-full top-0 left-0">
          <button
            className="absolute right-4 top-6"
            onClick={() => {
              setToggleMenu(false);
            }}>
            <HiOutlineX size={35} color={"#12463a"} />
          </button>
          <ul className="flex flex-col gap-5 text-center text-xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path ? "text-accent font-bold my-5 text-center" : ""
                  }>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const CartContent = ({ setToggleCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const calculateTotal = () => {
    let price = 0;
    cart.forEach((item) => (price += item.price * item.quantity));
    return price;
  };
  return (
    <div className="bg-white w-[90vw] rounded-2xl absolute bottom-0  right-0 xs:w-[380px] md:right-0 md:top-12 md:bottom-auto ">
      <div>
        <h4 className="font-bold p-4">Cart items ({cart.length})</h4>
        <ul className="px-2">
          {cart?.map((item) => (
            <li className="flex items-center ">
              <div
                className="w-20 aspect-square bg-center bg-contain bg-no-repeat "
                style={{ backgroundImage: `url(${item.image})` }}></div>
              <span>
                {item.name}{" "}
                <b className="text-accent font-bold">
                  {item.hot ? "(Hot)" : item.hot === false ? "(Cold)" : ""}
                </b>
              </span>
              <div className="font-medium text-accent ml-auto mr-4">{item.price}$</div>

              <div className="flex items-center gap-1">
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  <HiOutlineMinusSm size={20} />
                </button>
                <span className="font-bold text-lg">{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  <HiOutlinePlusSm size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 ">
        <div className="flex justify-between border-t border-black border-solid py-3">
          <h4 className="text-xl font-medium text-black">Total:</h4>
          <div className="text-xl font-bold text-accent">{calculateTotal()}$</div>
        </div>
        <a href="#" className="  text-accent font-medium text-lg underline">
          Proceed to checkout ➝
        </a>
      </div>
      <button className="absolute right-4 bottom-4 md:hidden">
        <HiOutlineX size={30} onClick={() => setToggleCart(false)} />
      </button>
    </div>
  );
};

export default Navbar;
