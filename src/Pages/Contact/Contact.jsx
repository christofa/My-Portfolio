import { useState } from "react";
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
import { Toaster, toaster } from "@/components/ui/toaster";

function Contact() {
  const [result, setResult] = useState("");

  const KEY_HOLDER = "72981751-03a5-4f7e-8768-ce10ee1b7be7";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setResult("Sending....");
    formData.append("access_key", KEY_HOLDER);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toaster.success({
        title: "Submitted Successfully",
        description: "You'd get a response as soon as possible. Thank you",
        duration: 9000,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      toaster.error({
        title: "Oops, There seems to be a problem",
        description: data.message,
        duration: 9000,
      });
    }
  };

  console.log(result);

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
          <div className="w-[400px] border shadow-md p-6 h-[450px] bg-white dark:bg-[#1E1E1E] dark:border-none">
            <h2 className="text-xl font-bold mb-5">Send Me a Message</h2>

            <Fieldset.Root size="lg" maxW="md">
              <form onSubmit={handleSubmit}>
                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="bg-[#f9fafb] rounded-2xl p-2 dark:text-black"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email address</Field.Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                      required
                      className="bg-[#f9fafb] rounded-2xl p-2 dark:text-black"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Your Message"
                      className="bg-[#f9fafb] rounded-2xl p-2 h-[100px] dark:text-black"
                    />
                  </Field.Root>
                </Fieldset.Content>

                <Button
                  type="submit"
                  alignSelf="flex-start"
                  className="bg-[#4f46e5] text-white w-full mt-5 transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] hover:text-white active:scale-95"
                >
                  Send Message
                </Button>
              </form>
            </Fieldset.Root>
          </div>
          <div className="w-[400px] border shadow-md p-6 h-[450px] dark:bg-[#1E1E1E] dark:border-none">
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
                <a href="https://github.com/christofa">
                  <span className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center text-[#4f46e5]">
                    <BsGithub />
                  </span>
                </a>

                <a href="https://x.com/its_chriso?s=21&t=g4Wq7FUnqrx98ghGXzs1ww">
                  <span className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center text-[#4f46e5]">
                    <FaTwitter />
                  </span>
                </a>

                <a href="https://www.linkedin.com/in/christopher-okoro-1931bb217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <span className="mt-1 bg-[#e0e7ff] rounded-full border-2 border-[#e0e7ff] w-10 h-10 flex items-center justify-center text-[#4f46e5]">
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export default Contact;
