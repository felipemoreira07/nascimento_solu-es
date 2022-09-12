import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Box display="flex">
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
  );
};
