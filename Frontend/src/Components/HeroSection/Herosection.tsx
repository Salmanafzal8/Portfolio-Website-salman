import React from "react";
import image from "../../../public/salman engineer.png";
import gitIcon from "../../../public/gitIcon.png";
import linkdinIcon from "../../../public/linkdin logo.png";
import portfoliIcon from "../../../public/athterateicon.png";

const Herosection: React.FC = () => {
  return (
    <div className="flex justify-around items-center ">
      <div className=" h-screen w-full text-start  flex justify-center items-center flex-col  text-black font-mono ">
        <div className="items-center ">
          <h4 className="text-xl py-5 font-semibold hover:text-amber-100">
            HI, I am
          </h4>
          <h1 className="text-4xl font-bold hover:text-amber-100">
            Salman Afzal
          </h1>
          <p className="text-lg opacity-60 hover:text-amber-100">
            Software Engineer
          </p>
          <div className="flex gap-6 pt-4">
              <img src={portfoliIcon} alt="portfolioIcon" className="h-12 bg-[#C4C4C4] p-2 rounded shadow-xl/20 " />
            <img src={gitIcon} alt="git-Icon" className="h-12 bg-[#C4C4C4] p-2 rounded shadow-xl/20 " />
            <img src={linkdinIcon} alt="linkdin-Icon" className="h-12 bg-[#C4C4C4] p-2 rounded shadow-xl/20 " />
          </div>
        </div>
      </div>

      <div
        className="h-screen bg-black w-full"
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <img src={image} alt="Engineer Image" className="ml-1" />
      </div>
    </div>
  );
};

export default Herosection;
