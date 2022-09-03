import React from "react";

// import data
import { courses } from "../data";

// import icons
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Courses = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container">
        {/* text */}
        <div className="text-center mb-16 lg:mb-32">
          <h2 className="h2 mb-3 lg:mb-[18px]" data-aos="fade-down" data-aos-delay="500">
            Popular Courses
          </h2>
          <p className="max-w-[480px] mx-auto" data-aos="fade-down" data-aos-delay="300">
            Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are providing the best.
          </p>
        </div>
        {/* course list */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
          {courses.map((item, index) => {
            const { image, title, desc, link, delay } = item;
            return (
              <div className="w-full bg-white hover:shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] rounded-[14px] flex flex-col mx-auto transition" key={index} data-aos="fade-up" data-aos-delay={delay}>
                {/* image */}
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <img src={image} alt="" />
                </div>
                {/* text */}
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">{title}</h4>
                  <p>{desc}</p>
                </div>
                {/* bottom */}
                <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                  {/* stars */}
                  <div className="flex text-orange gap-x-2">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  {/* link */}
                  <a className="font-medium" href="#/">
                    {link}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* btn */}
        <div className="flex justify-center">
          <button className="btn btn-sm btn-orange capitalize" data-aos="fade-up" data-aos-delay="600">
            browse all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
