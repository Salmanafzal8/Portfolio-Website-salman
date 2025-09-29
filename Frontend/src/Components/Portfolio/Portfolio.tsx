import React from "react";
import PortfolioTopImage from "../../../public/portfolioTopImage.png";
import HeadingButton from "../HeadingButton/HeadingButton";
import ProjectImage1 from "../../../public/Project1.png";
import ProjectImage2 from "../../../public/Project2.png";
import ProjectImage3 from "../../../public/Project3.png";
import ProjectImage4 from "../../../public/Project4.png";
import ProjectImage5 from "../../../public/Project5.png";
import ProjectImage6 from "../../../public/Project6.png";

function Portfolio() {
  return (
    <div>
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-auto">
        <img
          src={PortfolioTopImage}
          alt="PortfolioTopImage"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <HeadingButton text="PORTFOLIO" />
        </div>
      </div>
      <div className="flex justify-center bg-neutral-800  items-center gap-1 text-white w-full h-30">
        <button className="border-b-2 px-10">ALL</button>
        <button className="border-b-2 px-10 ">CODED</button>
        <button className="border-b-2 px-10">DESIGNED</button>
      </div>
<div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3  ">
  <img src={ProjectImage1} alt="Project 1" className="w-full h-64 object-cover" />
  <img src={ProjectImage2} alt="Project 2" className="w-full h-64 object-cover" />
  <img src={ProjectImage3} alt="Project 3" className="w-full h-64 object-cover" />
  <img src={ProjectImage4} alt="Project 4" className="w-full h-64 object-cover" />
  <img src={ProjectImage5} alt="Project 5" className="w-full h-64 object-cover" />
  <img src={ProjectImage6} alt="Project 6" className="w-full h-64 object-cover" />
</div>

    </div>
  );
}

export default Portfolio;

// import React from "react";
// import PortfolioTopImage from "../../../public/portfolioTopImage.png";
// import HeadingButton from "../HeadingButton/HeadingButton";
// import ProjectImage1 from "../../../public/Project1.png";
// import ProjectImage2 from "../../../public/Project2.png";
// import ProjectImage3 from "../../../public/Project3.png";
// import ProjectImage4 from "../../../public/Project4.png";
// import ProjectImage5 from "../../../public/Project5.png";
// import ProjectImage6 from "../../../public/Project6.png";

// function Portfolio() {
//   return (
//     <div className="relative w-full h-screen"> {/* Full screen height for the parent container */}
//       {/* Responsive Image */}
//       <img
//         src={PortfolioTopImage}
//         alt="PortfolioTopImage"
//         className="w-full h-full object-cover" // Ensures image covers full screen
//       />

//       {/* Portfolio Component on top of the image */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//         {/* Centered Button */}
//         <HeadingButton text="PORTFOLIO" />
//       </div>

//       {/* Filter Buttons */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex justify-center bg-neutral-800 items-center gap-4 text-white p-3">
//         <button className="border-b-2 px-10">ALL</button>
//         <button className="border-b-2 px-10">CODED</button>
//         <button className="border-b-2 px-10">DESIGNED</button>
//       </div>

//       {/* Gallery Section with Full Width and Height Images */}
//       <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 gap-4 p-4 z-10">
//         <img src={ProjectImage1} alt="Project 1" className="w-full h-full object-contain" />
//         <img src={ProjectImage2} alt="Project 2" className="w-full h-full object-contain" />
//         <img src={ProjectImage3} alt="Project 3" className="w-full h-full object-contain" />
//         <img src={ProjectImage4} alt="Project 4" className="w-full h-full object-contain" />
//         <img src={ProjectImage5} alt="Project 5" className="w-full h-full object-contain" />
//         <img src={ProjectImage6} alt="Project 6" className="w-full h-full object-contain" />
//       </div>
//     </div>
//   );
// }

// export default Portfolio;
