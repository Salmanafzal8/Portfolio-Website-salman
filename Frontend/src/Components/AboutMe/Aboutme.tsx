import React from "react";
import vectorDown from "../../../public/separatorBlack 1.png";
import HeadingButton from "../HeadingButton/HeadingButton";

const Aboutme = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#D7D7D7] gap-14 pt-15">
        <HeadingButton text="About ME" />
        <p className="text-center p-4 px-50 font-sans">
          Software Engineer with hands-on experience in web development.Strong
          foundation in Git for version control and a continuous learner
          committed to improving technical skills across the full stack.
          </p>
          <button className="border-x-2 p-1 font-bold">Explore</button>
         <img src={vectorDown} alt="" />
         </div>
         <  div className="flex ">
           <h1> Design</h1>
          <p>
          I can design the site based on your needs and suggestions. I can also
           design the site from scratch and consult you during the job.
          </p>
          <div>
          <h1> DEVELOPMENT</h1>
          <p>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
         </div>
      </div>
    </div>
  );
};

export default Aboutme;
