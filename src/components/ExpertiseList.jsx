import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MdArrowCircleRight } from "react-icons/md";

const expertiseData = [
  {
    title: "Front-end Development",
    stacks: ["ReactJS", "NextJS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Back-end Development",
    stacks: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    title: "UI/UX Design",
    stacks: ["Figma", "Adobe XD", "Framer"],
  },
  {
    title: "Web3 Development",
    stacks: ["Solidity", "Ethers.js", "Hardhat", "Web3.js"],
  },
  {
    title: "Technical Writing",
    stacks: ["Markdown", "Docs-as-code", "Notion", "GitBook"],
  },
];

const ExpertiseList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  console.log(activeIndex);

  return (
    <div className="max-w-2xl mx-auto p-4 font-inter">
      <div className="space-y-2">
        {expertiseData.map((item, index) => (
          <div key={index} className="border-b rounded-t-lg overflow-hidden " >
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center w-full text-left px-4 py-3  hover:bg-[#636ae8] hover:text-white font-medium"
            >
              {item.title}

              <span>
                <IoIosArrowDropdown
                  className="hover:bg-[#636ae8] hover:text-white "
                  size={20}
                />
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              } overflow-hidden px-4`}
            >
              <ul className="py-2 list-disc pl-5">
                {item.stacks.map((stack, i) => (
                  <p key={i} className="flex items-center gap-3 text-[13px] lg:text-sm md:text-sm dark:text-white">
                    {" "}
                    <MdArrowCircleRight className="text-[#4f46e5]"/> {stack}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseList;
