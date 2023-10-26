import items from "./Base.items";
import Slider from "react-slick";

const Base = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    customPaging: (i) => <div className="bg-[#D9D9D9] rounded-full h-2.5 w-2.5"></div>,
  };
  return (
    <section className=" text-center mx-auto mt-28 xs:w-full xs:max-w-[496px] sm:mt-14 md:max-w-[1068px] md:mt-20 lg:mt-36 xl:mt-44">
      <h3 className="text-[28px] font-medium xs:text-3xl sm:text-4xl lg:text-5xl">
        Coffee Build Your Base
      </h3>
      <p className="text-base sm:text-lg lg:text-xl lg:mt-4">What Happens Here</p>
      <Slider {...settings} className="mt-8">
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}{" "}
      </Slider>
    </section>
  );
};

const Item = ({ name, price, image }) => {
  return (
    <div className="mx-3 flex flex-col items-center">
      <img src={image} alt={name} className="rounded-3xl" />
      <h6>{name}</h6>
      <div className="text-aqua">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </div>
    </div>
  );
};

export default Base;
