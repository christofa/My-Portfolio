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
      <div className="mx-20">
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold mb-3">My Creative Projects</h1>
          <p className="text-xl font-light w-[680px] mx-auto">
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
          <div className="flex flex-wrap items-center gap-3">
            {projects.map((projects) => (
              <Card.Root
                maxW="260px"
                overflow="hidden"
                className="border"
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

                <Card.Body gap="1">
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
                        className="border text-[12px] font-semibold p-1 rounded"
                      >
                        <p>{stacks}</p>
                      </div>
                    ))}
                  </Card.Description>
                  <div className=" flex items-center gap-2 mt-3">
                    <Button className="border rounded px-2 text-xs font-semibold">
                      {" "}
                      <FiGithub />
                      Code
                    </Button>
                    <Button className="border rounded px-2 text-xs font-semibold">
                      {" "}
                      <MdArrowOutward />
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
