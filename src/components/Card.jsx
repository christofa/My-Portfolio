import React from "react";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export default function card() {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-2 lg:gap-[30px] md:gap-[15px] my-7 font-inter">
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="/images/Proj-8.svg"
          alt="Green double couch with wooden legs"
          className="w-full lg:w-full h-[135px] lg:h-[260px] md:h-[250px]"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">My Portfolio Website</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
           A website displaying all my capabilities and skills.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm ">View Details</Link>
        </Card.Footer>
      </Card.Root> 
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="/images/Proj-7.svg"
          alt="Green double couch with wooden legs"
          className="w-full lg:w-full h-[135px] lg:h-[260px] md:h-[250px]"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5 p-2 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">Speech-recognition-chat-app
</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
          A speech recognition web app created with vanilla JS.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="/images/Proj-4.svg"
          alt="Green double couch with wooden legs"
          className="w-full lg:w-full h-[135px] lg:h-[260px] md:h-[250px]"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">Magicbookwriter</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
           Collaborated with a team of 6 to create an AI kid's story writer.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="/images/Proj-3.svg"
          alt="Green double couch with wooden legs"
          className="w-full lg:w-full h-[135px] lg:h-[260px] md:h-[250px]"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">Therapy-Buddy</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
           Built an AI therapy Chatbot created for students' mental health.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
