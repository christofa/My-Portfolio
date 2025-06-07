import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router";
import { Box, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center border-b-2 p-5 lg:px-10 font-inter">
      <div className="flex items-center gap-2">
        <FaCode size={25} className="text-[#4f46e5]" />
        <h1 className="text-xl font-semibold">Christopher Okoro</h1>
      </div>
      <div className="hidden md:flex lg:flex items-center gap-5">
        <Button className="hover:text-[#4f46e5]">
          <Link to="/">Home</Link>
        </Button>
        <Button className="hover:text-[#4f46e5]">
          <Link to="/projects">Projects </Link>
        </Button>
        <Button className="hover:text-[#4f46e5]">
          <Link to="/about">About Me</Link>
        </Button>
        <Button className="hover:text-[#4f46e5]">
          {" "}
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
      <div className="hidden lg:block md:block">
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="xl">
            {colorMode === "light" ? (
              <LuSun className="text-[#4f46e5]" />
            ) : (
              <LuMoon className="text-[#4f46e5]" />
            )}
          </IconButton>
        </ClientOnly>
      </div>

      <div className="block sm:hidden" >
        <Box className="bg-white shadow-md z-50 relative" bg={{ base: "white", _dark: "black" }}>
          <Flex
            className="px-7 py-4"
            justify="space-between"
            align="center"
            maxW="7xl"
            mx="auto"
          >
            <Box
              className="text-2xl cursor-pointer transition-all duration-300 ease-in-out z-[60]"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
            </Box>
          </Flex>

          {/* Mobile Menu */}
          {isOpen && (
            <Box className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 ">
              <Box className="absolute top-16 left-[60%] w-32 bg-white shadow-lg rounded-b-lg py-6 px-4 mt-3" bg={{ base: "white", _dark: "black" }}>
                <Stack spacing={4} textAlign="center">
                  <Box className="hover:text-blue-500 cursor-pointer">
                    <Link to="/">Home</Link>
                  </Box>
                  <Box className="hover:text-blue-500 cursor-pointer">
                    <Link to="/projects">Projects </Link>
                  </Box>
                  <Box className="hover:text-blue-500 cursor-pointer">
                    <Link to="/about">About Me</Link>
                  </Box>
                  <Box className="hover:text-blue-500 cursor-pointer">
                    <Link to="/contact">Contact Me</Link>
                  </Box>
                  <Box className="hover:text-blue-500 cursor-pointer">
                    <ClientOnly fallback={<Skeleton boxSize="8" />}>
                      <IconButton
                        onClick={toggleColorMode}
                        variant="outline"
                        size="xl"
                      >
                        {colorMode === "light" ? (
                          <LuSun className="text-[#4f46e5]" />
                        ) : (
                          <LuMoon className="text-[#4f46e5]" />
                        )}
                      </IconButton>
                    </ClientOnly>
                  </Box>
                </Stack>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Header;
{
}
