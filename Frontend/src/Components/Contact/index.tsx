import HeadingButton from "../HeadingButton";
import vectorDown from "../../../public/separatorBlack 1.png";

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col text-center gap-10 bg-[#D7D7D7] ">
      <div className="flex justify-center items-center flex-col text-center gap-10 mt-10">
        <HeadingButton text="Contact" />
        <p className="px-40">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <img src={vectorDown} alt="Separator" className="mt-4" />
      </div>

      <div className="flex flex-col gap-5 w-120 ">
        <input
          type="text"
          name="Name"
          placeholder="Enter your name*"
          className="border-l-4 border-b-4 p-2"
        />
        <input
          type="text"
          name="Email"
          placeholder="Enter your Email*"
          className="border-l-4 border-b-4 p-2"
        />
        <input
          type="Number"
          name="Number"
          placeholder="Phone Number"
          className="border-l-4 border-b-4 p-2 "
        />
        <input
          type="text"
          name="Message"
          placeholder="Enter your Message*"
          className="border-l-4 border-b-4 p-2 pb-20"
        />
      </div>
      <button className="border-l-2 border-r-2 px-4 py-2 font-bold  hover:bg-gray-300 transition-all mb-10">
        SUBMIT
      </button>
    </div>
  );
}

export default Contact;
