import Navbar from "../Layout/Navbar";
import Herosection from "../Components/HeroSection";
import Description from "../Components/Description";
import Aboutme from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Learning from "../Components/Learning";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div className="h-screen bg-[var(--color-secondary)]">
      <Navbar />
      <Herosection />
      <Description />
      <Aboutme />
      <Skills />
      <Learning />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
