import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

type NavbarProps = {
  linkColor?: string;
  scrolledLinkColor?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  linkColor = "text-white",
  scrolledLinkColor = "text-white",
}) => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentLinkColor = scrolled ? scrolledLinkColor : linkColor;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-mono ${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer group"
            onClick={() => scrollToSection("#home")}
            data-cursor-hover
          >
            <Link to="/">
              <div className="flex items-center space-x-3">
                <motion.div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code2 size={20} className="text-white" />
                </motion.div>
                <div className="flex flex-col">
                  <span
                    className={`text-2xl font-bold transition-colors ${
                      scrolled ? "text-white" : "text-black"
                    }`}
                  >
                    Salman Afzal
                  </span>
                  <span
                    className={`text-1xl transition-colors ${
                      scrolled ? "text-white" : "text-black"
                    }`}
                  >
                    Software Engineer
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <ul className="hidden md:flex font-semibold gap-10 items-center">
          <li
            className={`hover:text-amber-100 cursor-pointer ${currentLinkColor}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:text-amber-100 cursor-pointer ${currentLinkColor}`}
          >
            <Link to="/about">About Me</Link>
          </li>
          <li
            className={`hover:text-amber-100 cursor-pointer ${currentLinkColor}`}
          >
            <Link to="/skills">Skills</Link>
          </li>
          <li
            className={`hover:text-amber-100 cursor-pointer ${currentLinkColor}`}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="rounded-3xl bg-white text-black p-2 font-bold hover:bg-[#C4C4C4]">
            <Link to="/contact">CONTACT ME</Link>
          </li>
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
        } md:hidden absolute top-full left-0 bg-black w-full p-5 flex flex-col gap-5 items-center`}
      >
        <li className={`${currentLinkColor}`}>About me</li>
        <li className={`${currentLinkColor}`}>Skills</li>
        <li className={`${currentLinkColor}`}>Portfolio</li>
        <li>
          <button className="rounded-3xl bg-white text-black p-2 font-bold">
            CONTACT ME
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
