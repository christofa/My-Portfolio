import React from "react";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export default function card() {
  return (
    <div className="w-full grid grid-cols-3 gap-[30px] my-7 ">
      <Card.Root maxW="xl" overflow="hidden" className="border" >
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2">
          <Card.Title className="font-semibold">E-commerce Platform Redesign</Card.Title>
          <Card.Description className="text-sm">
           Complete UI/UX overhaul resulting in a 25% increase in conversion rate.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="border">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2">
          <Card.Title className="font-semibold">Mobile App for Productivity</Card.Title>
          <Card.Description>
          Designed and developed a user-friendly mobile app helping users manage tasks efficiently.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="border">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2">
          <Card.Title className="font-semibold">E-commerce Platform Redesign</Card.Title>
          <Card.Description>
           Complete UI/UX overhaul resulting in a 25% increase in conversion rate.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
      <Card.Root maxW="xl" overflow="hidden" className="border">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2">
          <Card.Title className="font-semibold">E-commerce Platform Redesign</Card.Title>
          <Card.Description>
           Complete UI/UX overhaul resulting in a 25% increase in conversion rate.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Link to="/projects" className="text-[#4f46e5] text-sm">View Details</Link>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
