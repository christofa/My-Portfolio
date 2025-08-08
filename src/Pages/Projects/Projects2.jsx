import React from 'react'
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const projects = [
    {
      id: 1,
      image:
        "/images/Tproj-1.PNG",
      title: "Rendering real-time data with Vue, Node, and socket.io",
      description: "Used vue, node & sockets to build a 2D game.",
      stacks: ["Vue.js", "Node.js", "Socket.io"],
      link: "https://blog.openreplay.com/render-real-time-data-with-vue-node-and-socket-io/",
      isCompleted: true,
    },
    {
      id: 2,
      image:
        "/images/Tproj-4.PNG",
      title: "Recognizing Speech with vanilla JavaScript",
      description: "Used vanilla JavaScript to build a speech recognition app",
      stacks: ["JavaScript", "CSS"],
      link: "https://blog.openreplay.com/recognizing-speech-in-vanilla-javascript/",
      isCompleted: true,
    },
    {
      id: 3,
      image:
        "/images/Tproj-5.PNG",
      title: "Build a Real Estate Platform with React and Webiny Headless CMS",
      description: "Used the advanced search feature of Webiny CMS to build a real estate platform",
      stacks: ["React.js", "GraphQL", "Webiny CMS"],
      link: "https://www.webiny.com/blog/build-a-real-estate-platform-with-react-and-webiny-cms",
      isCompleted: true,
    },
    {
      id: 4,
      image:
        "/images/Tproj-6.PNG",
      title: "Building a Voice Controlled News Application using React, Alan AI, and Webiny CMS",
      description: "Used Webiny CMS and Alan Ai build a voice-controlled blog",
      stacks: ["React.js", "Alan AI", "GraphQL", "Webiny CMS"],
      link: "https://www.webiny.com/blog/build-voice-controlled-news-app-alanai-webiny",
      isCompleted: true,
    },
    {
      id: 5,
      image:
        "/images/Tproj-3.PNG",
      title: "Build a Text Translator using React and Swagger UI",
      description: "Used Swagger ui to create an app that translates texts",
      stacks: ["React.js", "CSS", "Swagger UI"],
      link: "https://blog.openreplay.com/build-a-text-translator-using-react-and-swagger-ui/",
      isCompleted: true,
    },
    {
      id: 6,
      image:
        "/images/Tproj-2.PNG",
      title: "Constructing an Alan AI-Powered Shopping Cart",
      description: "Built a voice-controlled shopping cart using Alan AI",
      stacks: ["React.js", "CSS", "Alan AI"],
      link: "https://blog.openreplay.com/constructing-an-alan-ai-powered-shopping-cart/",
      isCompleted: true,
    },
  ];

function Projects2() {
  return (
    <div className='font-inter animate-pop-in'>
      <div className="grid grid-cols-2 md:md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 md:gap-6 max-w-7xl">
                {projects.map((projects) => (
                  <Card.Root
                    maxW="260px"
                    overflow="hidden"
                    className='shadow-md'
                    key={projects.id}
                    bg={{ base: "white", _dark: "#1E1E1E" }}
                  >
                    <Image
                      src={projects.image}
                      alt="Green double couch with wooden legs"
                      className="relative"
                      
                    />
      
                    <span
                      className={`border-2 absolute top-2 right-2 px-2 py-1 rounded-full text-xs lg:text-sm md:text-sm ${
                        projects.isCompleted
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {projects.isCompleted ? "Completed" : "In Progress"}
                    </span>
      
                    <Card.Body gap="1" className="p-3 lg:p-5 md:p-5">
                      <Card.Title className="font-semibold text-sm lg:text-sm md:text-sm">
                        {projects.title}
                      </Card.Title>
                      <Card.Description className="text-[10px] lg:text-xs md:text-xs mb-1">
                        {projects.description}
                      </Card.Description>
                      <Card.Description className="flex flex-wrap items-center gap-2">
                        {projects.stacks.map((stacks) => (
                          <div
                            key={stacks}
                            className="border border-[#4f46e5] text-[9px] lg:text-[12px] font-semibold p-[5px] rounded text-[#4f46e5]"
                          >
                            <p>{stacks}</p>
                          </div>
                        ))}
                      </Card.Description>
                      <div className=" flex items-center gap-2 mt-3">
                        <a href={projects.link} target='blank'>
                          <Button className="rounded px-2 text-[12px] lg:text-xs md:text-xs font-semibold bg-[#4f46e5] text-white transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95"> <MdArrowOutward className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]"/> Read Article </Button> 
                        </a>
                      </div>
                    </Card.Body>
                  </Card.Root>
                ))}
              </div>
    </div>
  )
}

export default Projects2
