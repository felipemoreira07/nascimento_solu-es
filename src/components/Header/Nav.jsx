import {
  Text,
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
                <Text
                  fontFamily="Raleway"
                  fontWeight="semibold"
                  fontSize="25px"
                  cursor="pointer"
                  color="white"
                  padding="2rem"
                >
                  Solution
                </Text>
                <Text
                  fontFamily="Raleway"
                  fontWeight="semibold"
                  fontSize="25px"
                  cursor="pointer"
                  color="white"
                  padding="2rem"
                >
                  Impact
                </Text>
                <Text
                  fontFamily="Raleway"
                  fontWeight="semibold"
                  fontSize="25px"
                  cursor="pointer"
                  color="white"
                  padding="2rem"
                >
                  Resources
                </Text>

                <Link
                  to="/about-us"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    fontSize: "25px",
                    color: "white",
                    padding: "2rem",
                  }}
                >
                  Company
                </Link>

                <Text
                  fontWeight="semibold"
                  fontFamily="Raleway"
                  fontSize="25px"
                  cursor="pointer"
                  color="white"
                  padding="2rem"
                >
                  Contact
                </Text>
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
      >
        <Text
          fontFamily="Raleway"
          fontWeight="semibold"
          ml="40px"
          cursor="pointer"
        >
          Solution
        </Text>
        <Text
          fontFamily="Raleway"
          fontWeight="semibold"
          ml="40px"
          cursor="pointer"
        >
          Impact
        </Text>
        <Text
          fontFamily="Raleway"
          fontWeight="semibold"
          ml="40px"
          cursor="pointer"
        >
          Resources
        </Text>

        <Link
          to="/about-us"
          style={{
            fontWeight: "bold",
            fontFamily: "Raleway",
            marginLeft: "40px",
          }}
        >
          Company
        </Link>

        <Text
          fontWeight="semibold"
          fontFamily="Raleway"
          ml="40px"
          mr="30px"
          cursor="pointer"
        >
          Contact
        </Text>
      </Box>
    </>
  );
};
