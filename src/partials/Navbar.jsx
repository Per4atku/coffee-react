import { useState } from "react";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = ({ itemsCount }) => {
  return (
    <div
      className="flex fixed bottom-2 right-5 w-12 h-12 rounded-full shadow-3xl bg-white items-center justify-center
                    md:static md:bg-transparent md:shadow-none">
      <div className="cursor-pointer relative right-0.5 bottom-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none">
          <path
            d="M5.66669 6.33334H24.0534C24.4259 6.33336 24.7943 6.41144 25.1349 6.56255C25.4754 6.71366 25.7805 6.93446 26.0305 7.2107C26.2805 7.48694 26.4698 7.81249 26.5863 8.16638C26.7027 8.52027 26.7438 8.89463 26.7067 9.26534L25.9067 17.2653C25.8409 17.9234 25.5329 18.5334 25.0426 18.9772C24.5523 19.4209 23.9146 19.6667 23.2534 19.6667H10.52C9.90332 19.6669 9.30559 19.4534 8.82861 19.0625C8.35164 18.6716 8.02489 18.1274 7.90402 17.5227L5.66669 6.33334Z"
            stroke="#12463A"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M20.3334 25H23M5.66669 6.33333L4.58669 2.00933C4.51446 1.721 4.34796 1.46508 4.11363 1.28221C3.8793 1.09934 3.59059 1.00001 3.29335 1H1.66669L5.66669 6.33333ZM9.66669 25H12.3334H9.66669Z"
            stroke="#12463A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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

export default Navbar;
