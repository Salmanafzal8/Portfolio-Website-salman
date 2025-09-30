import Navbar from "../Layout/Navbar";
import Aboutme from "../Components/AboutMe";
import Footer from "../Layout/Footer";

const About = () => {
  return (
    <div>
      <Navbar linkColor="text-black" scrolledLinkColor="text-white" />
        <Aboutme />
      <Footer />
    </div>
  );
};

export default About;
