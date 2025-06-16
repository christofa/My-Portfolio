import React, { useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { RxEnvelopeClosed, RxDotFilled } from "react-icons/rx";
import { BiCopyright } from "react-icons/bi";
import { Button, Input, InputGroup } from "@chakra-ui/react";
import { Link } from "react-router";
import { Toaster, toaster } from "@/components/ui/toaster";

function Footer() {
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mail) {
      toaster.error({
        title: "Oops, There seems to be a problem",
        description: "This Feature is not avaliable yet",
        duration: 9000,
      });
      setMail("");
    }
  };
  return (
    <div className="mx-4 lg:mx-20 md:mx-8 font-inter">
      <div className="flex flex-col justify-center items-center gap-2 py-4">
        <p className="font-semibold mb-2">Stay up to date</p>
        <div className="flex items-center gap-2 mb-2">
          <InputGroup
            startElement={<RxEnvelopeClosed />}
            className="border-2 dark:border"
          >
            <Input
              value={mail}
              placeholder="Enter your email"
              onChange={(e) => setMail(e.target.value)}
            />
          </InputGroup>
          <Button
            onClick={handleSubmit}
            className="bg-[#4f46e5] p-2 border-2-[#4f46e5] rounded text-white transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] hover:text-white active:scale-95"
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px] lg:text-[16px] md:text-[16x] lg:pl-20 md:pl-20 lg:pr-65 md:pr-32">
        <div className="flex flex-col text-[10px] lg:text-[15px] md:text-[15px]">
          <Link className="font-mono text-[15px] lg:text-[18px] md:text-[18px] font-bold">
            Explore
          </Link>
          <Link to="/projects" className="hover:text-[#4f46e5]">
            Projects
          </Link>
          <Link to="/about" className="hover:text-[#4f46e5]">
            About Me
          </Link>
          <Link to="/contact" className="hover:text-[#4f46e5]">
            Contact Me
          </Link>
        </div>
        <div className="flex flex-col text-[10px] lg:text-[14px] md:text-[15px]">
          <h1 className="font-mono text-[15px] lg:text-[18px] md:text-[18px] font-bold">
            Services
          </h1>
          <p>Web Development</p>
          <p>UI/UX</p>
          <p>Tecnical Writing Me</p>
        </div>
        <div className="flex flex-col text-[10px] lg:text-[15px] md:text-[15px]">
          <h1 className="font-mono text-[14px] lg:text-[18px] md:text-[18px] font-bold">
            Resources
          </h1>
          <p>Blog</p>
          <p>Case Studies</p>
          <p>Articles</p>
        </div>
        <div className="flex flex-col text-[10px] lg:text-[14px] md:text-[15px]">
          <h1 className="font-mono text-[14px] lg:text-[18px] md:text-[18px] font-bold">
            Connect
          </h1>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Email</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px] mt-3 mb-5 lg:mb-2 md:mb-2  lg:text-[16px] md:text-[16x] lg:px-32 md:px-10 lg:py-5 md:py-2">
        <div className=" rounded p-1 w-[55px] lg:w-20 md:w-20 text-center bg-[#4f46e5] text-white">
          English
        </div>
        <p className="flex items-center gap-1 text-[12px] lg:text-[16px] md:text-[16x]">
          {" "}
          <BiCopyright className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]" />{" "}
          2020 Portfolio Showcase
        </p>
        <div className="flex items-center gap-2 lg:gap-3 md:gap-3 text-[#4f46e5] dark:text-[#636ae8]">
          <span>
            <a href="https://www.linkedin.com/in/christopher-okoro-1931bb217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <SlSocialLinkedin className="w-[15px] h-[15px] lg:w-[20px] h-[20px] md:w-[20px] h-[20px]" />
            </a>
          </span>
          <span>
            <a href="https://github.com/christofa">
              <FiGithub className="w-[15px] h-[15px] lg:w-[20px] h-[20px] md:w-[20px] h-[20px]" />
            </a>
          </span>
          <span>
            <Link to="/contact">
              <RxEnvelopeClosed className="w-[15px] h-[15px] lg:w-[20px] h-[20px] md:w-[20px] h-[20px]" />
            </Link>
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Footer;
