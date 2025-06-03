import Layout from "@/components/Layout";
import Card from "@/components/card";
import HomeContact from "@/components/HomeContact";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router";
import { FaFigma } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { FiLayout } from "react-icons/fi";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";
import { SiWeb3Dotjs } from "react-icons/si";

function Home() {
  return (
    <Layout>
      <div className=" my-5">
        <div className="flex justify-between items-center mb-28 mx-4 lg:mx-20 md:mx-8">
          <div className="w-[600px]">
          <div className="block lg:hidden md:hidden">
            <img
              src="/images/IMG_3145.PNG"
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
              <Button className="bg-[#4f46e5] text-white w-32 rounded-xl text-sm">
                View Projects
              </Button>
              <Button className="border border-[#4f46e5] w-32 text-[#4f46e5] rounded-xl text-sm">
                Learn About Me
              </Button>
            </div>
          </div>
          <div className="hidden lg:block md:block">
            <img
              src="/images/IMG_3145.PNG"
              alt="chris"
              className="lg:w-[400px] md:w-[320px] rounded-3xl"
            />
          </div>
        </div>

        <div className="my-20 mx-4 lg:mx-20 md:mx-8">
          <h2 className="text-center text-2xl font-bold mb-8">Recent Work</h2>
          <Card />
          <div className="flex justify-center items-center">
            <Button className="border border-[#4f46e5] w-40 py-2 rounded-xl">
              <Link to="/projects" className="text-[#4f46e5] text-sm">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>

        <div className="my-20 mx-4 lg:mx-20 md:mx-8" >
          <h2 className="text-center text-2xl font-bold mb-8">My Expertise</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-2 lg:gap-[30px] md:gap-[15px] lg:mx-[40px]">
            <div className="flex flex-start gap-2 border p-3 w-[100%] lg:w-[320px] md:w-[100%]">
              <FaFigma className="text-[#4f46e5] mt-1 w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]"/>
              <div>
                <h3 className="text-[13px] lg:text-[16px] md:text-[16px] font-bold">UI/UX Design</h3>
                <p className="lg:w-full md:w-full text-[11px] lg:text-sm md:text-sm">Crafting intutive and engaging user interfaces</p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border p-3 w-[100%] lg:w-[320px] md:w-[100%]">
              <div>
                <IoMdCode className="text-[#4f46e5] mt-1 w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[13px] lg:text-[16px] md:text-[16px] font-bold">Web Development</h3>
                <p className="lg:w-full md:w-full text-[11px] lg:text-sm md:text-sm">Building robust and scalable web applications</p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border p-3 w-[100%] lg:w-[320px] md:w-[100%]">
              <FiLayout className="text-[#4f46e5] mt-1 w-[25px] h-[25px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]"/>
              <div>
                <h3 className="text-[13px] lg:text-[16px] md:text-[16px] font-bold">Responsive Design</h3>
                <p className="lg:w-full md:w-full text-[11px] lg:text-sm md:text-sm">Ensuring seamless experiences across all devices</p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border p-3 w-[100%] lg:w-[320px] md:w-[100%]">
              <VscLayoutPanelOff  className="text-[#4f46e5] mt-1 w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]"/>
              <div>
                <h3 className="text-[13px] lg:text-[16px] md:text-[16px] font-bold">Technical Writing</h3>
                <p className="w-32 lg:w-full md:w-full text-[11px] lg:text-sm md:text-sm">Creating clear and concise documentation</p>
              </div>
            </div>
            <div className="flex flex-start gap-2 border p-3 w-[100%] lg:w-[320px] md:w-[100%]">
              <AiOutlineApi className="text-[#4f46e5] mt-1 w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]"/>
              <div>
                <h3 className="text-[13px] lg:text-[16px] md:text-[16px] font-bold">API Integration</h3>
                <p className="lg:w-full md:w-full text-[11px] lg:text-sm md:text-sm">Connecting diverse systems for seamless data flow</p>
              </div>
            </div> 
            <div className="flex flex-start gap-2 border p-3 w-[100%] lg:w-[320px] md:w-[100%]">
              <SiWeb3Dotjs className="text-[#4f46e5] mt-1 w-[20px] h-[20px] lg:w-[25px] h-[25px] md:w-[25px] h-[25px]" />
              <div>
                <h3 className="text-[13px] lg:text-[16px] md:text-[16px] font-bold">Project Management</h3>
              <p className="lg:w-full md:w-full text-[11px] lg:text-sm md:text-sm">Organizing and leading projects to success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-start justify-center items-center gap-4  text-[13px] lg:text-[17px] md:text-[16px] lg:gap-20 md:gap-[27px] my-20 mx-4 lg:mx-20 md:mx-8">
          <div className="">
            <img src="/images/IMG_3145.PNG" alt="chris" className="w-[500px] lg:w-[220px] md:w-[220px] rounded-full border-4 border-[#4f46e5]"/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">A Little About Me</h2>
            <p className="my-5">
              With a passion for building user-centric digital products, i
              combine technical skills with design principles to create
              impactful solutions. I thrive on learning and tackling new
              challenges{" "}
            </p>
            <Button className="text-sm text-[#4f46e5] border border-[#4f46e5] p-3 rounded-xl"> <Link to="/about">Learn More About Me</Link></Button>
          </div>
        </div>

      <div className=" bg-[#4f46e5] text-white">
        <HomeContact />
      </div>

      </div>
    </Layout>
  );
}

export default Home;
