const CoffeeShop = () => {
  return (
    <section className="wrap flex flex-col gap-8 max-w-[1200px] mx-auto sm:flex-row sm:justify-center">
      <div className="bg-[url(https://i.ibb.co/xYq232K/image-20.png)] w-full aspect-[9/7] bg-left bg-cover flex sm:w-3/5 sm:max-w-[719px]">
        <div className="bg-off-white w-3/5 h-3/5 self-end flex flex-col">
          <h2 className="leading-6 text-xl my-auto xs:text-calc_5vw_.5rem xs:leading-10 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[60px] ">
            Check out our
            <br /> coffee shop
          </h2>
          <p className=" text-xs xs:text-sm xs:w-11/12 sm:text-xs md:text-sm lg:text-base xl:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a
            href="#"
            className="link text-sm my-auto xs:text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
            FIND US
          </a>
        </div>
      </div>
      <div className="flex flex-col text-center items-center sm:w-2/5 sm:self-end bg-green-circle-280 xs:bg-green-circle-340 sm:bg-green-circle-200 md:bg-green-circle-240 lg:bg-green-circle-300 xl:bg-green-circle-340">
        <h2 className="text-2xl xs:text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Try new floor first
        </h2>
        <p className="text-xs my-3 xs:text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg ">
          Boost your productivity and build morning
        </p>
        <a
          href="#"
          className="link text-sm xs:text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
          CONTACT US
        </a>
        <img
          src="https://i.ibb.co/Z2QQTfH/pngegg-1-1.png"
          alt="Coffee cup"
          className="w-3/5 my-5 max-w-[283px]"
        />
      </div>
    </section>
  );
};

export default CoffeeShop;
