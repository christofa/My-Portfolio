import React from "react";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export default function card() {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-2 lg:gap-[30px] md:gap-[15px] my-7 font-inter">
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">E-commerce Platform Redesign</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
           Complete UI/UX overhaul resulting in a 25% increase in conversion rate.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm ">View Details</Link>
        </Card.Footer>
      </Card.Root> 
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5 p-2 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">Mobile App for Productivity</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
          Designed and developed a user-friendly mobile app helping users manage tasks efficiently.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">E-commerce Platform Redesign</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
           Complete UI/UX overhaul resulting in a 25% increase in conversion rate.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="shadow-md" bg={{ base: "white", _dark: "#1E1E1E" }}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2" className="w-[100%] lg:w-full md:w-full p-3 lg:p-5 md:p-5">
          <Card.Title className="text-[14px] lg:text-[18px] md:text-[18px]  font-semibold">E-commerce Platform Redesign</Card.Title>
          <Card.Description className="text-[10px] lg:text-sm md:text-sm text-[#666f77]">
           Complete UI/UX overhaul resulting in a 25% increase in conversion rate.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="p-3 lg:p-5 md:p-5">
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
