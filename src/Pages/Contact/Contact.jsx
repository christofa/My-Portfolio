import Layout from "@/components/Layout";
import { FaEnvelope, FaClock, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Textarea,
} from "@chakra-ui/react";

function Contact() {
  return (
    <Layout>
      <div className="mx-5 lg:mx-20 md:mx-10 mt-10 mb-20 font-inter">
        <div className="flex flex-col items-center justify-center  my-10">
          <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
          <p className="lg:w-[600px] md:w-[500px] text-center">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>
        <div className="flex flex-wrap lg:justify-center md:flex-nowrap lg:items-center gap-10">
          <div className="w-[400px] border-2 p-6 h-[450px]">
            <h2 className="text-xl font-bold mb-5">Send Me a Message</h2>

            <Fieldset.Root size="lg" maxW="md">
              <Fieldset.Content>
                <Field.Root>
                  <Field.Label>Name</Field.Label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    className="bg-[#f9fafb] rounded-2xl p-2"
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Email address</Field.Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-[#f9fafb] rounded-2xl p-2"
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Message</Field.Label>
                  <Textarea
                    name="notes"
                    placeholder="Your Message"
                    className="bg-[#f9fafb] rounded-2xl p-2 h-[100px]"
                  />
                </Field.Root>
              </Fieldset.Content>

              <Button
                type="submit"
                alignSelf="flex-start"
                className="bg-[#4f46e5] text-white w-full mt-5"
              >
                Send Message
              </Button>
            </Fieldset.Root>
          </div>
          <div className="w-[400px] border-2 p-6 h-[450px]">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="flex flex-start gap-5 mb-5">
              <div className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center">
                <FaEnvelope className="text-[#4f46e5]" size={20} />
              </div>
              <p>
                <span className="font-semibold">Email</span> <br />
                christofaokoro@gmail.com
              </p>
            </div>
            <div className="flex flex-start gap-5 mb-5">
              <div className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center">
                <FaLocationDot className="text-[#4f46e5]" size={20} />
              </div>
              <p>
                <span className="font-semibold">Location</span> <br />
                Lagos, Nigeria
              </p>
            </div>
            <div className="flex flex-start gap-5 mb-5">
              <div className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center">
                <FaClock className="text-[#4f46e5]" size={20} />
              </div>
              <p>
                <span className="font-semibold">Availability</span> <br />
                <span className="flex items-center gap-2">
                  <GoDotFill className="text-green-500" size={20} /> Available
                  for new projects
                </span>
              </p>
            </div>

            <div className="mt-8">
              <h1>Connect with me</h1>
              <div className="flex items-center gap-5 my-4">
                <span className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center text-[#4f46e5]">
                  <BsGithub />
                </span>
                <span className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center text-[#4f46e5]">
                  <FaTwitter />
                </span>
                <span className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center text-[#4f46e5]">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
