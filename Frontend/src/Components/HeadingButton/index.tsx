import React from "react";

interface HeadingButtonProps {
  text: string;
}

const HeadingButton: React.FC<HeadingButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="px-8 py-4 border-6 font-bold text-2xl line tracking-[8px]">
        {text}
      </button>
    </div>
  );
};

export default HeadingButton;
