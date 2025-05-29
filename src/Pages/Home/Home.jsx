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
        <div className="flex justify-between items-center mb-28 mx-20">
          <div className="w-[600px]">
            <h1 className="text-5xl font-bold ">
              Hi, I'm <span className="text-[#4f46e5]">Christopher Okoro</span>.
              Creative Developer, Technical Writer and Designer.
            </h1>{" "}
            <br />
            <p className="text-sm mb-5">
              Crafting beautiful and functional web experiences that drive
              results. Specializing in modern frontend development and intuitive
              UI/UX design.
            </p>
            <div className="flex items-center gap-2">
              <Button className="bg-[#4f46e5] text-white w-32 rounded-xl text-sm">
                View Projects
              </Button>
              <Button className="border border-[#4f46e5] w-32 text-[#4f46e5] rounded-xl text-sm">
                Learn About Me
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/IMG_3145.PNG"
              alt="chris"
              className="w-[400px] rounded-3xl"
            />
          </div>
        </div>

        <div className="my-20 mx-20">
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

        <div className="my-20 mx-20" >
          <h2 className="text-center text-2xl font-bold mb-8">My Expertise</h2>
          <div className="flex flex-wrap items-center gap-5 mx-[40px]">
            <div className="flex flex-start gap-2 border p-3 w-[320px]">
              <FaFigma size={25} className="text-[#4f46e5]"/>
              <div>
                <h3 className="font-bold">UI/UX Design</h3>
                <p className="text-sm">Crafting intutive and engaging user interfaces</p>
              </div>
            </div>
            <div className="flex flex-start gap-4 border p-3 w-[320px]">
              <div className="">
                <IoMdCode size={25} className="text-[#4f46e5]"/>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Web Development</h3>
                <p className="text-sm">Building robust and scalable web applications</p>
              </div>
            </div>
            <div className="flex flex-start gap-4 border p-3 w-[320px]">
              <FiLayout size={25} className="text-[#4f46e5]"/>
              <div>
                <h3 className="font-bold">Responsive Design</h3>
                <p className="text-sm">Ensuring seamless experiences across all devices</p>
              </div>
            </div>
            <div className="flex flex-start gap-4 border p-3 w-[320px]">
              <VscLayoutPanelOff size={25} className="text-[#4f46e5]"/>
              <div>
                <h3 className="font-bold">Technical Writing</h3>
                <p className="text-sm">Creating clear and concise documentation</p>
              </div>
            </div>
            <div className="flex flex-start gap-4 border p-3 w-[320px]">
              <AiOutlineApi size={35} className="text-[#4f46e5]"/>
              <div>
                <h3 className="font-bold">API Integration</h3>
                <p className="text-sm">Connecting diverse systems for seamless data flow</p>
              </div>
            </div> 
            <div className="flex flex-start gap-4 border p-3 w-[320px]">
              <SiWeb3Dotjs size={25} />
              <div>
                <h3 className="font-bold">Project Management</h3>
              <p className="text-sm">Organizing and leading projects to success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-20 my-20 mx-20">
          <div>
            <img src="/images/IMG_3145.PNG" alt="chris" className="w-[220px] rounded-full border-4 border-[#4f46e5]"/>
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
