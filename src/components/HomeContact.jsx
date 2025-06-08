import React from "react";
import { Field, Input, Textarea, Button } from "@chakra-ui/react";

function HomeContact() {
  return (
    <div className="mx-4 lg:mx-20 md:mx-8 py-20 text-center ">
      <h2 className="text-xl font-bold">Ready to Start a Project?</h2>
      <p className="mb-5">
        Whether you have a groundbreaking idea or need help with an existing
        project, i'd love to hear from you. Let's build something amazing
        together.
      </p>
      <div className="flex flex-col items-center gap-3 lg:w-[500px] md:w-[500px] mx-auto">
        <Field.Root className="bg-white px-3">
          <Input placeholder="Your Email" />
        </Field.Root>

        <Textarea placeholder="Your Message...."  className="bg-white h-40 px-3 pt-3"/>

        <Button className="bg-[#4f46e5] w-[100%] lg:w-[500px] md:w-[500px] transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] hover:text-white active:scale-95">Send Message</Button>
      </div>
    </div>
  );
}

export default HomeContact;
