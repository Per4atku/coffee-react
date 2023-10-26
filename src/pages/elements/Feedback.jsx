import data from "./Feedback.data.js";

const Feedback = () => {
  return (
    <section className="wrap flex flex-col items-center my-28 text-center xl:my-44">
      <h3 className="text-[28px] font-medium xs:text-3xl sm:text-4xl lg:text-5xl">
        Our coffee perfection feedback
      </h3>
      <p className="text-base w-5/6 mt-2 sm:text-lg lg:text-xl lg:mt-4">
        We don’t just make your coffee, we make your day!
      </p>
      <div className="flex flex-col items-center bg-bg border border-[#BCBCBC] mt-10 pb-24 max-w-[980px] relative">
        <img
          src="/assets/_about/quotes.svg"
          alt="quotes"
          className="absolute left-6 top-12 w-[120px]  sm:top-6 md:w-1/6 md:top-4 lg:top-16 "
        />
        <p className="text-center text-sm leading-7 p-8 pt-24 sm:text-base sm:leading-8 lg:p-10 lg:pt-32">
          {data.text}
        </p>
        <h3>{data.name}</h3>
        <p className="text-sm">{data.profession}</p>
        <img src={data.photo} alt={data.name} className="absolute w-32 rounded-full -bottom-16" />
      </div>
    </section>
  );
};

export default Feedback;
