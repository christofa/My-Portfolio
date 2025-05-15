import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router";

function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className="flex justify-between items-center p-5 border-2">
      <div className="flex items-center gap-2">
        <FaCode size={25} />
        <h1>Christopher Okoro</h1>
      </div>
      <div className="flex items-center gap-5">
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
      <div>
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="xl">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>
      </div>
    </div>
  );
}

export default Header;
