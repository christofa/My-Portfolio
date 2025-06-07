import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { RxEnvelopeClosed, RxDotFilled } from "react-icons/rx";
import { BiCopyright } from "react-icons/bi";
import { Button, Input, InputGroup } from "@chakra-ui/react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="mx-4 lg:mx-20 md:mx-8 font-inter">
      <div className="flex flex-col justify-center items-center gap-2 py-4">
        <p className="font-semibold">Stay up to date</p>
        <div className="flex items-center gap-2">
          <InputGroup startElement={<RxEnvelopeClosed />} className="border-2">
            <Input placeholder="Enter your email"/>
          </InputGroup>
          <Button className="bg-[#4f46e5] p-2 border-2-[#4f46e5] rounded text-white ">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px] lg:text-[16px] md:text-[16x] lg:pl-20 md:pl-20 lg:pr-65 md:pr-32">
        <div className="flex flex-col">
          <Link className="hover:text-[#4f46e5]">Explore</Link>
          <Link to="/projects" className="hover:text-[#4f46e5]">Projects</Link>
          <Link to="/about" className="hover:text-[#4f46e5]">About Me</Link>
          <Link to="/contact" className="hover:text-[#4f46e5]">Contact Me</Link>
        </div>
        <div>
          <h1>Services</h1>
          <p>Web Development</p>
          <p>UI/UX</p>
          <p>Tecnical Writing Me</p>
        </div>
        <div>
          <h1>Resources</h1>
          <p>Blog</p>
          <p>Case Studies</p>
        </div>
        <div>
          <h1>Connect</h1>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Email</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px] mt-3 mb-5 lg:mb-2 md:mb-2  lg:text-[16px] md:text-[16x] lg:px-32 md:px-10 lg:py-5 md:py-2">
        <div className="border rounded p-1 w-[55px] lg:w-20 md:w-20 text-center bg-[#4f46e5] text-white">English</div>
        <p className="flex items-center gap-1 text-[12px] lg:text-[16px] md:text-[16x]">
          {" "}
          <BiCopyright className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]"/> 2020 Portfolio Showcase 
        </p>
        <div className="flex items-center gap-2 lg:gap-3 md:gap-3 text-[#4f46e5]">
          <span>
            <SlSocialLinkedin className="w-[15px] h-[15px] lg:w-[20px] h-[20px] md:w-[20px] h-[20px]"/>
          </span>
          <span>
            <FiGithub  className="w-[15px] h-[15px] lg:w-[20px] h-[20px] md:w-[20px] h-[20px]"/>
          </span>
          <span>
            <RxEnvelopeClosed  className="w-[15px] h-[15px] lg:w-[20px] h-[20px] md:w-[20px] h-[20px]"/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
