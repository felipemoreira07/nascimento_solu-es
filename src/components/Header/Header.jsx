import { Box } from "@chakra-ui/react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      bg="blue.800"
      w="100%"
      h="100px"
      p={4}
      color="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      zIndex="2"
    >
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          fontFamily: "Raleway",
          marginLeft: "60px",
          fontSize: "calc(17px + 0.390625vw)",
        }}
      >
        VITIM
      </Link>
      <Nav />
    </Box>
  );
};
