import React from "react";

// import icons
import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="section-sm lg:section-lg bg-green min-h-[520px]">
      <div className="container">
        {/* text */}
        <div className="border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12" data-aos-delay="300" data-aos="fade-up" data-aos-offset="300">
          <h4 className="text-[26px] text-white font-bold mb-[14px] capitalize" data-aos-delay="600" data-aos="fade-up" data-aos-offset="300">
            subscribe our newsletter
          </h4>
          <p className="text-green-200 mb-12" data-aos-delay="800" data-aos="fade-up" data-aos-offset="300">
            subscribe our newsletter for furthur updates abous us
          </p>
          {/* form */}
          <form className="max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 p-4 lg:p-0 gap-x-4" data-aos-delay="1000" data-aos="fade-up">
            <div className="w-full relative flex">
              {/* icons */}
              <div className="absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300">
                <MdEmail />
              </div>
              {/* email input */}
              <input type="email" className="form-control w-full border border-green-300 bg bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]" placeholder="Enter your email address" />
            </div>
            {/* button */}
            <button className="btn btn-lg btn-orange text-white w-full lg:max-w-[180px]">Get started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
