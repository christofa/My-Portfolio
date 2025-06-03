import Layout from "@/components/Layout";
import Projects2 from "./Projects2";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Connarative",
    description: "Web development",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    isCompleted: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Connarative",
    description: "Web development",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    isCompleted: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Connarative",
    description: "Web development",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    isCompleted: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Connarative",
    description: "Web development",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    isCompleted: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Connarative",
    description: "Web development",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    isCompleted: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Connarative",
    description: "Web development",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    isCompleted: false,
  },
];

function Projects() {
  const [isToggled, setIsToggled] = useState(false);

  const handleFirstChange = () => setIsToggled(true);
  const handleSecondChange = () => setIsToggled(false);


  return (
    <Layout>
      <div className="mx-4 lg:mx-20 md:mx-5">
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold mb-3">My Creative Projects</h1>
          <p className="text-[16px] lg:text-xl font-light lg:w-[680px] md:w-[500px] mx-auto">
            Explore a collection of my recent works showcasing skills in web
            development, UI/UX design, and more. Each project represents a
            unique challenge and solution.
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center my-5">
          <Button onClick={handleSecondChange} className="bg-[#4f46e5] text-white text-sm font-semibold p-4 rounded-3xl">All Projects</Button>
          <Button onClick={handleFirstChange} className="border border-[#4f46e5] text-sm font-semibold p-4 rounded-3xl">All Articles</Button>
        </div>

        {isToggled ? (
          <Projects2 />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 md:gap-6 max-w-7xl">
            {projects.map((projects) => (
              <Card.Root
                // maxW="260px"
                overflow="hidden"
                className="border max-w-[179px] lg:max-w-[260px] md:max-w-[260px]"
                key={projects.id}
              >
                <Image
                  src={projects.image}
                  alt="Green double couch with wooden legs"
                  className="relative"
                />

                <span
                  className={`border-2 absolute top-2 right-2 px-2 py-1 rounded-full ${
                    projects.isCompleted
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {projects.isCompleted ? "Completed" : "In Progress"}
                </span>

                <Card.Body gap="2" className="p-3 lg:p-5 md:p-5">
                  <Card.Title className="font-semibold">
                    {projects.title}
                  </Card.Title>
                  <Card.Description className="text-sm mb-1">
                    {projects.description}
                  </Card.Description>
                  <Card.Description className="flex flex-wrap items-center gap-2">
                    {projects.stacks.map((stacks) => (
                      <div
                        key={stacks}
                        className="border border-[#4f46e5] text-[9px] lg:text-[12px] font-semibold p-[4px] rounded text-[#4f46e5]"
                      >
                        <p>{stacks}</p>
                      </div>
                    ))}
                  </Card.Description>
                  <div className="flex lg:flex md:flex items-center lg:gap-4 md:gap-4 gap-1 mt-3">
                    <Button className="border rounded lg:px-2 md:px-2 w-[50%] lg:w-[46%] md:w-[46%] lg:mb-0 md:mb-0 lg:text-xs text-[12px] font-semibold bg-[#4f46e5] text-white">
                      {" "}
                      <FiGithub className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]"/>
                      Code
                    </Button>
                    <Button className="border border-[#4f46e5] rounded lg:px-2 w-[50%] lg:w-[46%] md:w-[46%] lg:mt-0 md:mt-0  lg:text-xs text-[12px] font-semibold">
                      {" "}
                      <MdArrowOutward className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]"/>
                      Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Projects;
