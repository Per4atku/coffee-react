import { useState } from "react";
import { HiOutlineX, HiOutlineMenu, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

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

  return (
    <nav className="wrap flex items-center justify-between h-20 bg-bg md:h-24 lg:h-32">
      <Link to="/" className="flex items-center gap-1 md:gap-2 lg:gap-2.5">
        <img src="/assets/logo.svg" alt="logo" className="w-3/6 lg:w-20 flex-shrink-0" />
        <div className=" text-accent text-lg sm:text-xl">Cotask</div>
      </Link>
      <ul className="hidden md:flex gap-8">
        <li>
          <Link to="/" className="text-black text-lg">
            About us
          </Link>
        </li>
        <li>
          <Link to="/menu">Our Products</Link>
        </li>
        <li>
          <Link to="/delivery">Delivery</Link>
        </li>
      </ul>
      <Cart itemsCount={1} />
      <button
        className="flex md:hidden"
        onClick={() => {
          setToggleMenu(true);
        }}>
        <HiOutlineMenu size={25} color={"#12463a"} />
      </button>
      {toggleMenu && (
        <div className="fade-in absolute bg-white flex justify-center items-center h-[100vh] w-full top-0 left-0">
          <button
            className="absolute right-12 top-12"
            onClick={() => {
              setToggleMenu(false);
            }}>
            <HiOutlineX size={35} color={"#12463a"} />
          </button>
          <ul>
            <li className="text-center my-5">
              <Link to="/" className="text-accent text-xl">
                About us
              </Link>
            </li>
            <li className="text-center my-5">
              <Link to="/menu" className="text-xl">
                Our Products
              </Link>
            </li>
            <li className="text-center my-5">
              <Link to="/delivery" className="text-xl">
                Delivery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const CartContent = ({ setToggleCart }) => {
  return (
    <div className="bg-white w-[280px] rounded-2xl absolute bottom-0 right-0 xs:w-[350px] md:right-0 md:top-12 md:bottom-auto ">
      <div>
        <h4 className="font-bold p-4">Cart items (3)</h4>
        <ul className="px-2">
          <li className="flex items-center justify-between">
            <div
              className="w-20 aspect-square bg-center bg-contain bg-no-repeat "
              style={{ backgroundImage: "url(https://i.ibb.co/FVRVLSV/latte.png)" }}></div>
            <span>
              Vanilla latte <b className="text-accent font-bold">(Hot)</b>
            </span>
            <div className="bg-black h-[1px] w-4 hidden xs:block"></div>
            <div className="font-medium text-accent">23$</div>
            <button>
              <HiOutlineX size={20} />
            </button>
          </li>
        </ul>
      </div>
      <div className="p-4 ">
        <div className="flex justify-between border-t border-black border-solid py-3">
          <h4 className="text-xl font-medium text-black">Total:</h4>
          <div className="text-xl font-bold text-accent">23$</div>
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
