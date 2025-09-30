import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Contact from "../Components/Contact";

const ContactMe = () => {
  return (
    <div className="bg-[#D7D7D7]">
      <Navbar linkColor="text-black" />
      <div className="p-15">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
