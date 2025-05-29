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
    <div className="flex justify-between items-center p-5 border-b-2 lg:px-10">
      <div className="flex items-center gap-2">
        <FaCode size={25} className="text-[#4f46e5]" />
        <h1 className="text-xl font-semibold">Christopher Okoro</h1>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/projects">Projects </Link>
        </Button>
        <Button>
          <Link to="/about">About Me</Link>
        </Button>
        <Button>
          {" "}
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
      <div className="hidden lg:block">
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

      <div className="block sm:hidden">
        <Box className="bg-white shadow-md ">
          <Flex
            className="px-7 py-4"
            justify="space-between"
            align="center"
            maxW="7xl"
            mx="auto"
          >
            <Box
              className="text-2xl cursor-pointer transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </Box>
          </Flex>

          {/* Mobile Menu */}
          {isOpen && (
            <Box className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 transition-all duration-300 ease-in-out z-40">
              <Box
                className="absolute top-6 right-6 text-3xl cursor-pointer"
                onClick={toggleMenu}
              >
                <FiX />
              </Box>
              <Stack spacing={6} textAlign="center">
                <Box className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
                  Home
                </Box>
                <Box className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
                  About
                </Box>
                <Box className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
                  Services
                </Box>
                <Box className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
                  Contact
                </Box>
              </Stack>
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Header;
{
  /* <Stack spacing={4}>
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
            </Stack> */
}
