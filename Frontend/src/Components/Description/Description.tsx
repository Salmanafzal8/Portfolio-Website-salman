import React from "react";

const Description: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-start p-8 bg-[#1D1D1D] font-normal text-white font-sans">
      <h1 className="font-bold text-2xl">Salman afzal</h1>
      <p>
        Motivated Software Engineer with hands-on experience in web
        development using React.js, Next.js, and WordPress. Proficient in core
        technologies like HTML, CSS, JavaScript, and familiar with backend tools
        including Node.js, Express.js, MongoDB, and MySQL. Skilled in building responsive
        interfaces, integrating APIs, and working collaboratively in Agile
        environments. Strong foundation in Git for version control and a
        continuous learner committed to improving technical skills across the
        full stack.
      </p>
      <button className="border-x-2 p-1">Read more</button>
      
    </div>
  );
};

export default Description;
