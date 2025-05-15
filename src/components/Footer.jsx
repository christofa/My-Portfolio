import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { RxEnvelopeClosed, RxDotFilled } from "react-icons/rx";
import { BiCopyright } from "react-icons/bi";
import { Button, Input, InputGroup } from "@chakra-ui/react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 py-4">
        <h1>Portfolio Showcase</h1>
        <p>Stay up to date</p>
        <div className="flex items-center gap-2">
          <InputGroup startElement={<RxEnvelopeClosed />} className="border-2">
            <Input placeholder="Enter your email"/>
          </InputGroup>
          <Button className="bg-[#4f46e5] p-1 border-2-[#4f46e5] rounded ">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center pl-20 pr-80">
        <div>
          <h1>Explore</h1>
          <p>Projects</p>
          <p>About Me</p>
          <p>Contact Me</p>
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

      <div className="flex justify-between items-center px-32 py-5">
        <div className="border-2 rounded p-1">English</div>
        <p className="flex items-center gap-1">
          {" "}
          <BiCopyright /> 2020 Portfolio Showcase <RxDotFilled />
          Privacy <RxDotFilled />
          Terms od Service <RxDotFilled />
          Cookie Policy{" "}
        </p>
        <div className="flex items-center gap-3">
          <span>
            <SlSocialLinkedin size={20} />
          </span>
          <span>
            <FiGithub size={20} />
          </span>
          <span>
            <RxEnvelopeClosed size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
