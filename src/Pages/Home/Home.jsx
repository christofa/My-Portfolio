import Layout from "@/components/Layout";
import Card from "@/components/Card";
import HomeContact from "@/components/HomeContact";

import { Button } from "@chakra-ui/react";
import { Link } from "react-router";
import { FaFigma } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { FiLayout, FiDownload } from "react-icons/fi";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";
import { SiWeb3Dotjs } from "react-icons/si";

function Home() {
  return (
    <Layout>
      <div className=" mt-10 mb-5 font-inter">
        <div className="flex justify-between items-center mb-28 mx-4 lg:mx-20 md:mx-8 animate-fade-in-up">
          <div className="w-[600px]">
            <div className="block lg:hidden md:hidden">
              <img
                src="/images/cover2.PNG"
                alt="chris"
                className="w-[60px] rounded-full border-4 border-[#4f46e5] mb-4"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl md:text-[45px] font-bold">
              Hi, I'm <span className="text-[#4f46e5]">Christopher Okoro</span>.
              Creative Developer, Technical Writer and Designer.
            </h1>{" "}
            <br />
            <p className="text-sm mb-5 lg:w-[580px] md:w-[440px]">
              Crafting beautiful and functional web experiences that drive
              results. Specializing in modern frontend development and intuitive
              UI/UX design.
            </p>
            <div className="flex justify-center lg:justify-start md:justify-start items-center gap-6 lg:gap-3 md:gap-3">
              <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift text-white w-[140px] rounded-xl text-sm transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95">
                <a
                  href="/cv.pdf"
                  download="Christopher's CV"
                  className="flex items-center gap-2"
                >
                  Download CV <FiDownload />
                </a>
              </Button>
              <Button className="border border-[#4f46e5] w-[140px] text-[#4f46e5] rounded-xl text-sm py-2 px-4 transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] hover:text-white active:scale-95">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block md:block">
            <img
              src="/images/cover2.PNG"
              alt="chris"
              className="lg:w-[400px] md:w-[320px] rounded-3xl"
            />
          </div>
        </div>

        <div className="my-20 mx-4 lg:mx-20 md:mx-8">
          <h2 className="text-center text-2xl font-bold mb-8">Recent Work</h2>
          <Card />
          <div className="flex justify-center items-center">
            <Button className="border border-[#4f46e5] w-40 py-2 rounded-xl text-[#4f46e5] hover:text-white transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5]  active:scale-95">
              <Link to="/projects" className=" text-sm">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>

        <div className="my-20 mx-4 lg:mx-20 md:mx-8">
          <h2 className="text-center text-2xl font-bold mb-8">My Expertise</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-2 lg:gap-[30px] md:gap-[15px] lg:mx-[40px]">
            <div className="flex flex-start gap-2 border border-[#4f46e5] rounded-xl shadow-xl p-3 w-[100%] lg:w-[320px] md:w-[100%] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <FiLayout className="text-[#4f46e5] w-[25px] h-[25px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              <div>
                <h3 className="text-[12px] lg:text-[16px] md:text-[16px] font-bold">
                  Back-end Development
                </h3>
                <p className="lg:w-full md:w-full text-[10px] lg:text-sm md:text-sm text-[#666f77]">
                  Ensuring working functionalities across all devices
                </p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border border-[#4f46e5] rounded-xl shadow-xl p-3 w-[100%] lg:w-[320px] md:w-[100%] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div>
                <IoMdCode className="text-[#4f46e5] w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[12px] lg:text-[16px] md:text-[16px] font-bold">
                  Front-end Development
                </h3>
                <p className="lg:w-full md:w-full text-[10px] lg:text-sm md:text-sm text-[#666f77]">
                  Building robust and scalable web applications
                </p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border border-[#4f46e5] rounded-xl shadow-xl p-3 w-[100%] lg:w-[320px] md:w-[100%] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <FaFigma className="text-[#4f46e5] w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              <div>
                <h3 className="text-[12px] lg:text-[16px] md:text-[16px] font-bold">
                  UI/UX Design
                </h3>
                <p className="lg:w-full md:w-full text-[10px] lg:text-sm md:text-sm text-[#666f77]">
                  Crafting intutive and engaging user interfaces
                </p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border border-[#4f46e5] rounded-xl shadow-xl p-3 w-[100%] lg:w-[320px] md:w-[100%] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <VscLayoutPanelOff className="text-[#4f46e5] w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              <div>
                <h3 className="text-[12px] lg:text-[16px] md:text-[16px] font-bold">
                  Technical Writing
                </h3>
                <p className="w-32 lg:w-full md:w-full text-[10px] lg:text-sm md:text-sm text-[#666f77]">
                  Creating clear and concise documentation
                </p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border border-[#4f46e5] rounded-xl shadow-xl p-3 w-[100%] lg:w-[320px] md:w-[100%] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <AiOutlineApi className="text-[#4f46e5] w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              <div>
                <h3 className="text-[12px] lg:text-[16px] md:text-[16px] font-bold">
                  API Integration
                </h3>
                <p className="lg:w-full md:w-full text-[10px] lg:text-sm md:text-sm text-[#666f77]">
                  Connecting diverse systems for seamless data flow
                </p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border border-[#4f46e5] rounded-xl shadow-xl p-3 w-[100%] lg:w-[320px] md:w-[100%] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <SiWeb3Dotjs className="text-[#4f46e5] w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              <div>
                <h3 className="text-[12px] lg:text-[16px] md:text-[16px] font-bold">
                  Project Management
                </h3>
                <p className="lg:w-full md:w-full text-[10px] lg:text-sm md:text-sm text-[#666f77]">
                  Organizing and leading projects to success
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-start justify-center items-center gap-4 text-[13px] lg:text-[17px] md:text-[16px] lg:gap-20 md:gap-[27px] my-20 mx-4 lg:mx-20 md:mx-8">
          <div className="">
            <img
              src="/images/2.jpg"
              alt="chris"
              className="w-[700px] h-[110px] lg:h-[150px] lg:w-[380px] md:w-[380px] rounded-full border-4 border-[#4f46e5]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">A Little About Me</h2>
            <p className="my-5 text-[#666f77]">
              I am a skilled MERN stack developer and technical writer dedicated
              to creating dynamic, user-focused web applications and impactful
              documentation. With a passion for innovation and problem-solving,
              I deliver efficient, highquality solutions that drive results and
              exceed expectations.
            </p>
            <Button className="text-sm text-[#4f46e5] border border-[#4f46e5] p-3 rounded-xl transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] hover:text-white active:scale-95">
              {" "}
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift text-white">
          <HomeContact />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
