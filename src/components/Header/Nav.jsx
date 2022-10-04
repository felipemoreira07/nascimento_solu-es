import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navOptions = [
    {
      id: "1",
      name: "Solution",
      url: "/",
    },
    {
      id: "2",
      name: "Impact",
      url: "/",
    },
    {
      id: "3",
      name: "Resources",
      url: "/",
    },
    {
      id: "4",
      name: "Company",
      url: "/about-us",
    },
    {
      id: "5",
      name: "Contact",
      url: "/",
    },
  ];

  return (
    <>
      <Box
        sx={{
          "@media (min-width: 750px)": {
            display: "none",
          },
        }}
      >
        <Button
          size="lg"
          bgColor="blue.800"
          _hover={{
            bg: "blue.600",
          }}
          onClick={onOpen}
        >
          <HamburgerIcon />
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="white" size="lg" />
            <DrawerBody bgColor="blue.800">
              <Box display="flex" flexDirection="column">
                {navOptions.map((option) => {
                  return (
                    <Link
                      key={option.id}
                      to={option.url}
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Raleway",
                        fontSize: "1.5rem",
                        color: "white",
                        padding: "2rem",
                      }}
                    >
                      {option.name}
                    </Link>
                  );
                })}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Box
        sx={{
          "@media (max-width: 750px)": {
            display: "none",
          },
        }}
        display="flex"
        pr="2rem"
      >
        {navOptions.map((option) => {
          return (
            <Link
              key={option.id}
              to={option.url}
              style={{
                fontWeight: "bold",
                fontFamily: "Raleway",
                marginLeft: "2.5rem",
              }}
            >
              {option.name}
            </Link>
          );
        })}
      </Box>
    </>
  );
};
