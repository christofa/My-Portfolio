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
      "/images/Proj-1.svg",
    title: "Conarative",
    description: "An AI application where you can tell your stories",
    stacks: ["React.js", "TypeScript", "ShadCn", "Vite", "Tailwind CSS"],
    gitLink:
      "https://github.com/code-z2/conarrate/blob/main/apps/client-app/tailwind.config.js",
    sitLink: "https://conarrate.netlify.app/",
    isCompleted: true,
  },
  {
    id: 2,
    image:
      "/images/Proj-2.svg",
    title: "CupidNotes",
    description: "An Anonymus love Messaging app for lovers",
    stacks: ["React.js", "Vite", "Node.js", "ExpressJS", "MongoDB"],
    gitLink: "https://github.com/christofa/CupidNotes",
    sitLink: "#",
    isCompleted: false,
  },
  {
    id: 3,
    image:
      "/images/Proj-3.svg",
    title: "Therapy-Buddy",
    description: "Built an AI therapy Chatbot created for students' mental health",
    stacks: ["React.js", "Vite", "SCSS", "Dido"],
    gitLink: "https://github.com/christofa/Therapy-Buddy",
    sitLink: "https://therapy-bud.netlify.app/",
    isCompleted: true,
  },
  {
    id: 4,
    image:
      "/images/Proj-4.svg",
    title: "Magicbookwriter",
    description:
      "Collaborated with a team of 6 to create an AI kid's story writer",
    stacks: ["React.js", "Scss", "Node.js", "OpenAi"],
    gitLink: "https://github.com/christofa/CupidNotes",
    sitLink: "https://x.com/magicbookwriter?s=21&t=g4Wq7FUnqrx98ghGXzs1ww",
    isCompleted: true,
  },
  {
    id: 5,
    image:
      "/images/Proj-5.svg",
    title: "2D block game",
    description: "A 2d-block game built with sockets.io",
    stacks: ["Vue.js", "Node.js", "Express.js"],
    gitLink: "https://github.com/christofa/CupidNotes",
    sitLink: "https://blockgame2.netlify.app/",
    isCompleted: true,
  },
  {
    id: 6,
    image:
      "/images/Proj-7.svg",
    title: "Speech-recognition-chat-app",
    description: "A speech recognition web app created with vanilla JS",
    stacks: ["JavaScript", "CSS"],
    gitLink: "https://github.com/christofa/Speech-recognition-chat-app",
    sitLink: "https://speech-chat-app.netlify.app/",
    isCompleted: true,
  },
  {
    id: 7,
    image:
      "/images/Proj-8.svg",
    title: "My Portfolio",
    description: "A website displaying all my capabilities and skills",
    stacks: ["ReactJs", "ShadCn", "MongoDB"],
    gitLink: "https://github.com/christofa/CupidNotes",
    sitLink: "https://all-about-chris.vercel.app",
    isCompleted: false,
  },
];

function Projects() {
  const [isToggled, setIsToggled] = useState(false);

  const handleFirstChange = () => setIsToggled(true);
  const handleSecondChange = () => setIsToggled(false);

  return (
    <Layout>
      <div className="mx-4 lg:mx-20 md:mx-5 mb-20 font-inter">
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold mb-3">My Creative Projects</h1>
          <p className="text-[16px] lg:text-xl font-light lg:w-[680px] md:w-[500px] mx-auto">
            Explore a collection of my recent works showcasing skills in web
            development, UI/UX design, and more. Each project represents a
            unique challenge and solution.
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center my-5">
          <Button
            onClick={handleSecondChange}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift text-white text-sm font-semibold p-4 rounded-3xl transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95"
          >
            All Projects
          </Button>
          <Button
            onClick={handleFirstChange}
            className="border border-[#4f46e5] text-sm font-semibold p-4 rounded-3xl transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95"
          >
            All Articles
          </Button>
        </div>

        {isToggled ? (
          <Projects2 />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 md:gap-6 max-w-7xl animate-pop-in">
            {projects.map((projects) => (
              <Card.Root
                // maxW="260px"
                overflow="hidden"
                className="max-w-[179px] lg:max-w-[260px] md:max-w-[260px] shadow-md"
                key={projects.id}
                bg={{ base: "white", _dark: "#1E1E1E" }}
              >
                <Image
                  src={projects.image}
                  alt="Green double couch with wooden legs"
                  className="relative h-[200px]"
                />

                <span
                  className={`border-2 absolute top-2 right-2 px-2 py-1 rounded-full text-sm ${
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
                    <a
                      href={projects.gitLink}
                      target="_blank"
                      className="text-center rounded lg:px-2 md:px-2 w-[50%] lg:w-[46%] md:w-[46%] lg:mb-0 md:mb-0 lg:text-xs text-[12px] font-semibold bg-[#4f46e5] text-white transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95"
                    >
                      <Button className="">
                        {" "}
                        <FiGithub className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={projects.sitLink}
                      target="_blank"
                      className="text-center border border-[#4f46e5] rounded lg:px-2 w-[50%] lg:w-[46%] md:w-[46%] lg:mt-0 md:mt-0  lg:text-xs text-[12px] font-semibold transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95"
                    >
                      <Button>
                        <MdArrowOutward className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]" />
                        Demo
                      </Button>
                    </a>
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
