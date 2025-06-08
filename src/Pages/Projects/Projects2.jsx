import React from 'react'
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Connarative",
      description: "Medium Blog",
      stacks: ["ReactJs", "ShadCn", "MongoDB"],
      isCompleted: false,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Connarative",
      description: "Medium Blog",
      stacks: ["ReactJs", "ShadCn", "MongoDB"],
      isCompleted: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Connarative",
      description: "Medium Blog",
      stacks: ["ReactJs", "ShadCn", "MongoDB"],
      isCompleted: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Connarative",
      description: "Medium Blog",
      stacks: ["ReactJs", "ShadCn", "MongoDB"],
      isCompleted: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Connarative",
      description: "Medium Blog",
      stacks: ["ReactJs", "ShadCn", "MongoDB"],
      isCompleted: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Connarative",
      description: "Medium Blog",
      stacks: ["ReactJs", "ShadCn", "MongoDB"],
      isCompleted: false,
    },
  ];

function Projects2() {
  return (
    <div className='font-inter'>
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
                      className={`border-2 absolute top-2 right-2 px-2 py-1 rounded-full ${
                        projects.isCompleted
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {projects.isCompleted ? "Completed" : "In Progress"}
                    </span>
      
                    <Card.Body gap="1" className="p-3 lg:p-5 md:p-5">
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
                            className="border border-[#4f46e5] text-[9px] lg:text-[12px] font-semibold p-[5px] rounded text-[#4f46e5]"
                          >
                            <p>{stacks}</p>
                          </div>
                        ))}
                      </Card.Description>
                      <div className=" flex items-center gap-2 mt-3">
                        <Button className="rounded px-2 text-[12px] lg:text-xs md:text-xs font-semibold bg-[#4f46e5] text-white transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] active:scale-95"> <MdArrowOutward className="w-[12px] h-[12px] lg:w-[16px] h-[16px] md:w-[16px] h-[16px]"/> Read Article </Button>
                      </div>
                    </Card.Body>
                  </Card.Root>
                ))}
              </div>
    </div>
  )
}

export default Projects2
