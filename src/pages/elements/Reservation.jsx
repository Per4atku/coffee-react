import ReservationDatePicker from "../../mui/Reservation/ReservationDatePicker";
import ReservationTimeField from "../../mui/Reservation/ReservationTimeField";
import ReservationTextField from "../../mui/Reservation/ReservationTextField";
import ReservationSelect from "../../mui/Reservation/ReservationSelect";

const Reservation = () => {
  return (
    <section className="bg-[url(https://i.ibb.co/qRFVGpX/Photo.jpg)] w-full mt-28 bg-center bg-cover flex justify-center items-center xl:mt-44 lg:aspect-[14/8]">
      <div className="bg-reservation w-full flex flex-col my-10 mx-3 items-center aspect-square max-w-[500px] justify-center gap-3 xs:aspect-[6/5] xs:mx-5 sm:aspect-[7/5] sm:max-w-[792px] sm:w-4/5 lg:gap-6 ">
        <h5 className="font-normal text-[8px] border-b border-b-aqua pb-1 px-0.5 sm:text-xs">
          RESERVATION
        </h5>
        <h4 className="text-xl text-white sm:text-2xl lg:text-3xl">Book your table now</h4>

        <form className="grid grid-cols-[3fr,1fr,3fr] grid-rows-[repeat(3,40px)] gap-x-3 gap-y-3 mx-3 max-w-[390px] sm:max-w-[560px] sm:grid-cols-[2fr_1fr_1fr_2fr] sm:grid-rows-[repeat(3,50px)] sm:gap-x-5 sm:gap-y-5">
          <div className="sm:col-start-1 sm:col-end-3">
            <ReservationTextField label={"Name"} />
          </div>
          <div className="col-start-2 col-end-4 sm:row-start-2 sm:col-start-4 sm:col-end-5">
            <ReservationDatePicker />
          </div>
          <div className="col-start-1 col-end-2 row-start-2 sm:row-start-2 sm:col-start-1 sm:col-end-2">
            <ReservationSelect />
          </div>
          <div className="col-start-2 col-end-4 row-start-2">
            <ReservationTimeField />
          </div>
          <div className="col-start-1 col-end-3 row-start-3 sm:col-start-3 sm:col-end-5 sm:row-start-1">
            <ReservationTextField label={"Email"} />
          </div>
          <button className="bg-white sm:row-start-3 sm:col-start-2 sm:col-end-4 text-[#292E36]">
            Book a Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
