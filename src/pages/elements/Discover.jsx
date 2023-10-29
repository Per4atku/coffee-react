const Discover = () => {
  return (
    <section className="wrap mt-28 flex flex-col max-w-[1400px] mx-auto sm:flex-row sm:gap-5 sm:items-center md:gap-12 lg:gap-16 xl:gap-20 xl:mt-44 2xl:gap-28">
      <img
        src="https://i.ibb.co/dkhW8LD/unsplash-3n3m-Po-Gko8g.png"
        alt=""
        className="w-full xs:w-3/4 sm:w-3/5 md:max-w-[462px] lg:max-w-[676px]"
      />
      <div className="sm:w-2/5 2xl:w-2/6">
        <h2 className="text-4xl my-6 lg:text-5xl lg:my-8 xl:text-6xl xl:leading-[70px] ">
          Discover the <br /> best coffee
        </h2>
        <p className="text-base xs:w-3/4 sm:text-sm sm:w-full lg:text-base xl:text-lg 2xl:w-5/6">
          We are a company that makes and distributes delicious drinks. our main product is made
          with a secret recipe and available in stores worldwide.
        </p>
        <button className="mt-8 bg-accent py-2 px-5 text-white font-semibold lg:py-3 lg:px-6 lg:mt-10">
          Learn more
        </button>
      </div>
    </section>
  );
};
export default Discover;
