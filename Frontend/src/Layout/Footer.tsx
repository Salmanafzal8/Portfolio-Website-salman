import React from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-neutral-900 text-white p-6 gap-2 flex flex-col items-center">
      <button
        onClick={handleBackToTop}
        className=" text-white px-4 py-2 rounded flex flex-col items-center hover:bg-gray-300 hover:text-black transition duration-300"
      >
        <FaAnglesUp />
        Back to Top
      </button>
      <div className="flex justify-center items-center gap-4 text-3xl">
        <RiFacebookBoxLine />
        <CiLinkedin />
        <IoLogoInstagram />
        <MdOutlineMailOutline />
      </div>
            <p className="mb-4">© 2025 Salman Afzal. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
