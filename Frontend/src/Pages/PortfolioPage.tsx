import Navbar from "../Layout/Navbar";
import Portfolio from "../Components/Portfolio";
import Footer from "../Layout/Footer";

const PortfolioPage = () => {
  return (
    <div>
      <Navbar linkColor='text-black' />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
