import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="wrap flex pt-2 pb-72 bg-bg flex-col sm:flex-row sm:items-center sm:pb-60 lg:pt-5">
      <div className="flex w-full max-w-[1200px] flex-col mx-auto justify-between sm:flex-row sm:items-center ">
        <div className="w-full ">
          <h1 className="text-3xl w-full lg:text-4xl lg:leading-[4rem] xl:text-5xl xl:leading-[5rem]">
            Enjoy your coffee <br />
            before your activity
          </h1>
          <p className="my-5 text-xs w-2/3 sm:text-sm sm:w-3/4 md:text-base md:w-4/5 md:mt-5 md:my-7 lg:text-lg lg:w-3/5 xl:w-2/5 xl:my-8">
            Boost your productivity and build your mood with a glass of coffee in the morning{" "}
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-accent border border-accent border-solid text-white font-medium py-2 px-5 text-xs lg:py-3 lg:px-6 lg:text-sm ">
              <div>Order now</div>
            </button>
            <Link
              to={"/menu"}
              className="border-accent border border-solid py-2 px-5 text-xs font-medium text-accent lg:py-3 lg:px-6 lg:text-sm ">
              More menu
            </Link>
          </div>
        </div>
        <img
          src="/assets/_about/coffee_display.png"
          alt="Coffee"
          className="min-w-[250px] max-w-[300px] w-4/5 mt-10 mx-auto md:max-w-[400px] md:mx-0"
        />
      </div>
    </header>
  );
};

export default Header;
