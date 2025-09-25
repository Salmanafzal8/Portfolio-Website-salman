import React from "react";
import HeadingButton from "../HeadingButton/HeadingButton";
import htmlLogo from "../../../public/htmllogo.svg";
import cssLogo from "../../../public/cssLogo.svg";
import saasLogo from "../../../public/sassLogo.svg";
import javscript from "../../../public/javscriptLogo.svg";
import reactLogo from "../../../public/reactLogo.svg";
import bootstrapLogo from "../../../public/bootstraplogo.png";
import git from "../../../public/git.svg";
import figma from "../../../public/figma.svg";

const skilllist = [
  { imgsrc: htmlLogo, text: "HTML5" },
  { imgsrc: cssLogo, text: "CSS3" },
  { imgsrc: saasLogo, text: "SASS" },
  { imgsrc: javscript, text: "JAVASCRIPT" },
  { imgsrc: reactLogo, text: "REACT" },
  { imgsrc: bootstrapLogo, text: "BOOTSTRAP" },
  { imgsrc: git, text: "GIT" },
  { imgsrc: figma, text: "FIGMA" },
];

function Skills() {
  return (
    <div className="bg-[#D7D7D7] py-15 ">
      <div className="flex justify-center ">
        <HeadingButton text="Skills" />
      </div>
      <div className=" md:grid md:grid-cols-4 w-full pt-8 gap-5 px-0 md:px-40 items-center flex flex-col">
        <div className="text-2xl font-semibold pl-15 md:col-span-4 ">
          Using Now:
        </div>
        {skilllist.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center "
          >
            <img src={item.imgsrc} alt={item.text} />
            <p className="pt-1 text-2xl">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
