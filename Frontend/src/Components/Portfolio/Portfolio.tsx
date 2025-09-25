import React from "react";
import PortfolioTopImage from "../../../public/portfolioTopImage.png";
import HeadingButton from "../HeadingButton/HeadingButton";

function Portfolio() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-auto">
      {/* Responsive Image */}
      <img 
        src={PortfolioTopImage} 
        alt="PortfolioTopImage" 
        className="w-full h-full object-cover" 
      />
      
      {/* Centered Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <HeadingButton text="PORTFOLIO" />
      </div>
    </div>
  );
}

export default Portfolio;
