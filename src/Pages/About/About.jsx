import React from "react";
import Layout from "@/components/Layout";
import ExpertiseList from "@/components/ExpertiseList";
import { PiEnvelopeSimpleLight, PiPhone, PiTwitterLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { Button, Input, InputGroup } from "@chakra-ui/react";

function About() {
  return (
    <Layout>
      <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-10 mx-4 lg:mx-20 md:mx-5 mt-10 font-inter">
        <div>
          <div className="w-[100%] lg:w-[350px] md:w-[350px] p-5 lg:mb-4 md:mb-4 border shadow-md dark:bg-[#1E1E1E] dark:border-none">
            <img
              src="/images/cover.PNG"
              alt=""
              className="w-[100px] rounded-full mb-3"
            />
            <h2 className="text-2xl font-semibold">Christopher Okoro</h2>
            <p className="text-[#666f77]">
              {" "}
              Fullstack Developer | Technical Writer | Designer{" "}
            </p>
          </div>
          <div className="hidden lg:block md:block w-[350px] p-5 lg:mt-4 md:mt-4 border shadow-md dark:bg-[#1E1E1E] dark:border-none">
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <p className="flex items-center gap-2 my-3 text-[#666f77]">
              {" "}
              <PiEnvelopeSimpleLight
                className="text-[#4f46e5] dark:text-[#636ae8]"
                size={20}
              />{" "}
              christofaokoro@gmail.com
            </p>
            <p className="flex items-center gap-2 my-3 text-[#666f77]">
              {" "}
              <PiPhone
                className="text-[#4f46e5] dark:text-[#636ae8]"
                size={20}
              />{" "}
              +(234) 7054-476-978
            </p>
            <p className="flex items-center gap-2 my-3 text-[#666f77]">
              {" "}
              <FaWhatsapp
                className="text-[#4f46e5] dark:text-[#636ae8]"
                size={20}
              />{" "}
              +(234) 8171-204-103
            </p>
            <p className="flex items-center gap-2 my-3 text-[#666f77]">
              {" "}
              <SlLocationPin
                className="text-[#4f46e5] dark:text-[#636ae8]"
                size={20}
              />{" "}
              Lagos, Nigeria
            </p>
            <div className="border-b w-70 mx-auto my-5"></div>
            <div className="flex items-center gap-3">
              <Button className="border border-[#4f46e5] p-3 w-10 text-[#4f46e5] dark:text-[#636ae8]">
                <SlSocialLinkedin />
              </Button>
              <Button className="border border-[#4f46e5] p-3 w-10 text-[#4f46e5] dark:text-[#636ae8]">
                <FiGithub />
              </Button>
              <Button className="border border-[#4f46e5] p-3 w-10 text-[#4f46e5] dark:text-[#636ae8]">
                <PiTwitterLogo />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 mb-4 border shadow-md dark:bg-[#1E1E1E] dark:border-none">
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <div className="bg-blue text-[#666f77] text-[13px] lg:text-sm md:text-sm">
              <p className="mb-3 text-block">
                My journey in tech spans over four years of steady growth, from
                learning the basics to building real-world solutions as a
                full-stack developer.
                <br />
              </p>

              <p className="mb-3">
                I've interned with forward-thinking companies to sharpen my
                skills and, in 2022, expanded into technical writing to better
                express technical ideas and empower others. While landing
                full-time roles has been tough due to regional limitations, my
                drive remains unmatched. <br />
              </p>

              <p className="mb-3">
                I'm confident in my ability to deliver, eager to learn, and
                fully accountable. Every line of code and article I write
                reflects my passion for solving problems and creating impact.
                I'm just getting started and I'm ready. <br />
              </p>
            </div>
          </div>

          <div className="p-5 mb-4 border shadow-md dark:bg-[#1E1E1E] dark:border-none">
            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
            <div>
              <ExpertiseList />
            </div>
          </div>

          <div className="p-3 lg:p-5 md:p-5 mb-4 border shadow-md dark:bg-[#1E1E1E] dark:border-none">
            <h2 className="text-2xl font-semibold">Professional Experience</h2>

            <div className="my-5 text-[13px] lg:text-sm md:text-sm">
              <div className="flex justify-between items-center ml-5">
                <h3 className="text-l font-semibold">
                  IT Engineer <br />
                  <span className="italic text-[10px] lg:text-xs md:text-xs">
                    Synnex Entertainment | Hybrid
                  </span>
                </h3>
                <p className="text-[#666f77]">2024 - Present</p>
              </div>

              <p className="text-[#a8a9a8] ml-8">
                Lead all technical operations, including website maintenance,
                email hosting, and graphic design. Monitor artists’ streaming
                performance across platforms and manage payment systems for both
                clients and the company. Ensure seamless digital functionality
                and contribute to the company’s creative and operational
                efficiency.
              </p>
            </div>

            <div className="mb-5 text-[13px] lg:text-sm md:text-sm">
              <div className="flex justify-between items-center ml-5">
                <h3 className="text-l font-semibold">
                  Technical Writer (Contract) <br />
                  <span className="italic text-[10px] lg:text-xs md:text-xs">
                    OpenReplay Blog | Remote
                  </span>
                </h3>
                <p className="text-[#a8a9a8]">2022 - 2023</p>
              </div>

              <p className="text-[#a8a9a8] ml-8">
                Developed dynamic web applications using Vue, React, and Node.js
                accompanied by clear, engaging documentation detailing tools,
                processes, and innovative packages. Streamlined workflows for
                developers, delivering clarity and usability to boost
                productivity and drive project succes.
              </p>
            </div>

            <div className="mb-5 text-[13px] lg:text-sm md:text-sm">
              <div className="flex justify-between items-center ml-5">
                <h3 className="text-l font-semibold">
                  Front-end Developer Intern <br />
                  <span className="italic text-[10px] lg:text-xs md:text-xs">
                    Hotels.NG(HNG) internship 9.0 | Remote
                  </span>
                </h3>
                <p className="text-[#a8a9a8]">2022 - 2022</p>
              </div>

              <p className="text-[#a8a9a8] ml-8">
                Collaborated with a dynamic team of 6 developers and 5 designers
                to build an engaging kid's story illustrator web application
                using React, NodeJS, SCSS, and Stable Diffusion AI. Contributed
                significantly by offering technical support and ensuring the
                product is accessible.
              </p>
            </div>

            <div className="mb-5 text-[13px] lg:text-sm md:text-sm">
              <div className="flex justify-between items-center ml-5">
                <h3 className="text-l font-semibold">
                  Technical Writer (Contract) <br />
                  <span className="italic text-[10px] lg:text-xs md:text-xs">
                    Webiny Blog | Remote
                  </span>
                </h3>
                <p className="text-[#a8a9a8]">2022 - Present</p>
              </div>

              <p className="text-[#a8a9a8] ml-8">
                Created innovative web applications, including a voice-activated
                news blog and an advanced real estate search platform,
                leveraging Webiny CMS. Documented processes to tutor developers,
                showcasing the product's ease of use and efficiency, driving
                adoption and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
