import {useState} from "react";
import { Field, Input, Textarea, Button } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";

function HomeContact() {
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
    <div className="mx-4 lg:mx-20 md:mx-8 py-20 text-center ">
      <h2 className="text-xl font-bold">Ready to Start a Project?</h2>
      <p className="mb-5">
        Whether you have a groundbreaking idea or need help with an existing
        project, i'd love to hear from you. Let's build something amazing
        together.
      </p>
      <div className="flex flex-col items-center gap-3 lg:w-[500px] md:w-[500px] mx-auto">
    
        <form onSubmit={handleSubmit}>
          <Field.Root className="bg-white my-2">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-3 dark:text-black"
            />
          </Field.Root>

          <Textarea
            name="message"
            required
            placeholder="Your Message...."
            className="bg-white h-40 px-3 pt-3 dark:text-black"
          />

          <Button
            type="submit"
            className="bg-[#4f46e5] w-[100%] lg:w-[500px] md:w-[500px] transition-all duration-200 hover:scale-105 hover:bg-[#4f46e5] hover:text-white active:scale-95"
          >
            Send Message
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default HomeContact;
