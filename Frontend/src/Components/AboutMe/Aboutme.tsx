import React from "react"; 
import vectorDown from "../../../public/separatorBlack 1.png"; 
import HeadingButton from "../HeadingButton/HeadingButton"; 
import designHeadingLogo from "../../../public/Design Logo.png"; 
import devlopmentLogo from "../../../public/Development Logo.png"; 
import maintainanceLogo from "../../../public/Maintenance logo.png"; 

const Aboutme = () => {
  return (
    <div className="bg-[#D7D7D7] py-25 flex justify-center items-center flex-col">
      <div className="flex flex-col items-center gap-14 px-6">
        <HeadingButton text="About ME" />
        <p className="text-center px-12 font-sans text-lg">
          Software Engineer with hands-on experience in web development. Strong
          foundation in Git for version control and a continuous learner
          committed to improving technical skills across the full stack.
        </p>
        <button className="border-2 px-4 py-2 font-bold rounded-lg hover:bg-gray-300 transition-all">
          Explore
        </button>
        <img src={vectorDown} alt="Separator" className="mt-4" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-12 px-6">
        <div className="mb-8 mx-4">
          <img src={designHeadingLogo} alt="designHeadingLogo" />
          <h2 className="text-2xl font-semibold -mt-10 ">Design</h2>
          <p className="text-lg">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className="mb-8 mx-4">
          <img src={devlopmentLogo} alt="devlopmentLogo" />
          <h2 className="text-2xl font-semibold -mt-10  ">DEVELOPMENT</h2>
          <p className="text-lg">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start text-balance md:mx-[30%] sm:mx-0 mt-8 px-4 pl-10">
        <img src={maintainanceLogo} alt="maintainanceLogo" className="mb-4" />
        <h2 className="text-2xl  font-semibold -mt-10">MAINTENANCE</h2>
        <p className="text-lg ">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </p>
      </div>
      <img src={vectorDown} alt="Separator" className="mt-25" />
    </div>
  );
};

export default Aboutme;
