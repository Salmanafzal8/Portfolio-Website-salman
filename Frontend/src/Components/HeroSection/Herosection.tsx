import React from 'react';
import image from "../../../public/pngtree-professional-man-standing-confidently-png-image_14220754.png";  // Adjust the image import

const Herosection: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="text-center  text-white ">
        <h4 className="text-xl">HI, I am</h4>
        <h1 className="text-4xl font-bold">Salman Afzal</h1>
        <p className="text-lg">Software Engineer</p>
      </div>

      <div className="absolute bg-black ">
        <img 
          src={image} 
          alt="Engineer Image"
          className='h-12 p-1'
        />
      </div>
    </div>
  );
}

export default Herosection;
