import { HashLink as Link } from "react-router-hash-link";

const Products = () => {
  return (
    <section className="wrap mt-28 xl:mt-44">
      <h3 className="text-center mb-3 text-[28px] font-medium xs:text-3xl sm:text-4xl sm:mb-7 lg:mb-10 lg:text-5xl">
        Explore products
      </h3>
      <div className="grid grid-cols-2 grid-rows-[96px_47px_100px_140px_70px] gap-y-3 gap-x-3 mx-auto max-w-[490px] sm:grid-rows-[132px_95px_181px_229px_72px] sm:max-w-[760px] sm:gap-y-6 sm:gap-x-6 lg:grid-rows-[132px_43px_29px_181px_72px] lg:grid-cols-3 lg:max-w-[1142px] ">
        <div className="flex rounded-xl bg-[#E1EEE9] p-1.5 justify-between xs:p-2 sm:p-3">
          <div className="product-content self-end">
            <h6>Monthly Deals</h6>
            <Link to={"/menu#coffee-drinks"}>Shop now!</Link>
          </div>
          <img
            src="/assets/_about/sale.svg"
            alt="SALE Special offer"
            className="self-center w-2/5 max-w-[56px] sm:max-w-none sm:w-20"
          />
        </div>
        <div className="flex flex-col rounded-xl bg-white p-1.5 row-start-1 row-end-3 col-start-2 justify-between xs:p-2 sm:p-3 lg:row-start-1 lg:row-end-4">
          <img
            src="/assets/_about/beans.svg"
            alt="Whole Beans"
            className="self-center w-4/5 mt-5 max-w-[140px] sm:max-w-none sm:w-52 sm:mt-10"
          />
          <div className="product-content self-start">
            <h6>Whole beans</h6>
            <Link to={"/menu#whole-beans"}>Shop now!</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between row-start-2 row-end-4 bg-white p-1.5 rounded-xl xs:p-2 sm:p-3 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-5">
          <img
            src="/assets/_about/coffee_machine.svg"
            alt="Coffee Machines"
            className="w-1/2 self-center max-w-[75px] mt-3 sm:max-w-none sm:w-40 sm:mt-6"
          />
          <div className="product-content">
            <h6>Coffee Machines</h6>
            <Link to={"/menu#coffee-machines"}>Shop now!</Link>
          </div>
        </div>
        <div className="flex justify-between rounded-xl p-1.5 bg-[#E1EEE9] xs:p-2 sm:p-3 lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5">
          <div className="product-content self-end">
            <h6>Accessories</h6>
            <Link to={"/menu#accessories"}>Shop now!</Link>
          </div>
          <img
            src="/assets/_about/accessories.svg"
            alt="Accessories"
            className="self-center w-2/3 max-w-[67px] sm:max-w-none sm:w-32"
          />
        </div>
        <div className="flex justify-between rounded-xl p-1.5 bg-[#E1EEE9] xs:p-2 sm:p-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3">
          <div className="product-content self-end">
            <h6>Ground Beans</h6>
            <Link to={"/menu#ground-beans"}>Shop now!</Link>
          </div>
          <img
            src="/assets/_about/ground_beans.svg"
            alt="Ground Beans"
            className="self-center w-2/5 min-w-[55px] max-w-[74px] sm:max-w-none sm:w-28 sm:mr-5"
          />
        </div>
        <div className="flex flex-col justify-between bg-white p-1.5 rounded-xl xs:p-2 sm:p-3 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-5">
          <img
            src="/assets/_about/capsules.svg"
            alt="Coffee Capsules"
            className="self-center mt-2 w-2/5 min-w-[60px] max-w-[78px] sm:max-w-none sm:w-32 "
          />
          <div className="product-content self-start">
            <h6>Coffee Capsules</h6>
            <Link to={"/menu#coffee-capsules"}>Shop now!</Link>
          </div>
        </div>
        <div className="flex col-start-1 col-end-3 items-center  bg-[#E1EEE9] rounded-xl pl-2 flex-wrap py-2 gap-2 sm:gap-4 lg:col-end-4">
          <h6 className="text-sm sm:text-lg">Loyalty program</h6>
          <img src="/assets/_about/arrow.svg" alt="arrow" className="w-6 sm:w-8" />
          <a href="#" className="text-[10px] text-[#7E7D7A] underline text-sm">
            Earn points and get product discounts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
