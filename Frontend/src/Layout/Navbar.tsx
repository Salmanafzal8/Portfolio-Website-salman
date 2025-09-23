import { useEffect, useState } from "react";
import weblogo from "../../public/Portfolio web logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <img src={weblogo} alt="Web logo" className="h-10 w-auto color-white" />

        <ul className="hidden md:flex font-semibold gap-10 items-center">
          <li className="hover:text-amber-100 cursor-pointer">About me</li>
          <li className="hover:text-amber-100 cursor-pointer">Skills</li>
          <li className="hover:text-amber-100 cursor-pointer">Portfolio</li>
          <button className="rounded-3xl bg-white text-black p-2 font-bold hover:bg-[#C4C4C4]">
            CONTACT ME
          </button>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 bg-black w-full text-white p-5 flex flex-col gap-5 items-center`}
      >
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <button className="rounded-3xl bg-white text-black p-2 font-bold">
          CONTACT ME
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
