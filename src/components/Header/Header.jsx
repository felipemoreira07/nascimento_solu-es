import { Box, Text } from "@chakra-ui/react";
import { Nav } from "./Nav";

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
    >
      <Text fontFamily="Raleway" fontSize="2xl" fontWeight="bold" ml="60px">
        VITIM
      </Text>
      <Nav />
    </Box>
  );
};
