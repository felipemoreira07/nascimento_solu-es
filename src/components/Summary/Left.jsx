import { Box, Text } from "@chakra-ui/react";

export const Left = ({ showLogo, showButton, title, text }) => {
  return (
    <Box
      w="50%"
      h="600px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      padding="4rem"
    >
      {showLogo && (
        <Text
          color="green.800"
          fontFamily="Raleway"
          fontWeight="bold"
          padding="0 0 1rem 0"
        >
          VITIM TECHNOLOGIES
        </Text>
      )}
      <Text
        fontFamily="Cormorant Garamond"
        fontSize="50px"
        fontWeight="bold"
        padding="0 0 1rem 0"
      >
        {title}
      </Text>
      <Text fontFamily="Public Sans" fontSize="xl" padding="0 0 1rem 0">
        {text}
      </Text>
      {showButton && (
        <Box
          as="button"
          width="50%"
          height="4rem"
          bgColor="green.700"
          color="white"
          fontFamily="Raleway"
          fontWeight="bold"
          _hover={{
            bg: "green.400",
          }}
          marginTop="20px"
          borderRadius="10px"
        >
          Get VITIM Assistance
        </Box>
      )}
    </Box>
  );
};
