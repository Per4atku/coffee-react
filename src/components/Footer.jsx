const Footer = () => {
  return (
    <footer className="wrap bg-[#111111]">
      <div className="grid grid-cols-[1fr_0_1fr] grid-rows-2 pt-5 gap-y-5 md:grid-cols-3 md:grid-rows-1">
        <a
          className="justify-self-start self-center text-white underline text-base row-start-2 md:row-start-1"
          href="#">
          Instagram Feed
        </a>
        <div className="col-start-1 col-end-4 flex self-center justify-self-center gap-3 items-center md:col-start-2 md:col-end-3">
          <img src="/assets/logo-l.svg" alt="Logo" />
          <div className="text-aqua text-xl">Cotask</div>
        </div>
        <div className="flex justify-self-end self-center col-start-3 row-start-2 gap-4 md:row-span-1">
          <a href="#">
            <img src="/assets/Insta.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/assets/Fb.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/assets/Pintrest.svg" alt="Pinterest" />
          </a>
          <a href="#">
            <img src="/assets/Twiter.svg" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-[1fr_0_1fr] gap-y-5 pt-12 lg:grid-cols-3 lg:grid-rows-1">
        <div className="justify-self-start row-start-2 lg:row-start-1">
          <h5>Contact</h5>
          <div className="mt-4 text-white leading-6 text-xs lg:text-sm">
            5 Rue Dalou, 75015 Paris <br />
            <b>Call</b> - +33 156 78 89 56 <br />
            <b>benoit@mail.com</b>
          </div>
        </div>
        <div className="justify-self-center col-start-1 col-end-4 lg:col-start-2 lg:col-end-3">
          <div className="text-white text-center text-base leading-5">
            Join our mailing list for updates, <br />
            Get news & offers events.
          </div>
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent text-white text-base rounded-none font-medium leading-[126.5%] border-[#858585] border-solid border-[0.751px] sm:p-4"
            />
            <button
              className="p-[10px_20px] justify-center items-center bg-white text-[#292e36] text-center text-base font-medium leading-5"
              onClick={() => {
                console.log("Saved!");
                saveSubscribed(email);
              }}>
              Subscribe
            </button>
          </div>
        </div>
        <div className="justify-self-end col-start-3 text-end">
          <h5>Working Hours</h5>
          <div className="mt-4 text-white text-xs leading-6 lg:text-sm">
            <b>Mon – Fri</b>: 7.00am – 6.00pm <br />
            <b>Sat</b>: 7.00am – 6.00pm <br />
            <b>Sun</b>: 8.00am – 6.00pm <br />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="absolute bg-[#575b62] h-px w-full left-0"></div>
        <div className="flex py-6 text-white text-sm leading-4 justify-between">
          <div>© Copyright - Cotask</div>
          <div className="text-end">Styleguide / Licenses</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
