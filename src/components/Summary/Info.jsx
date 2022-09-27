import { Box, Text } from "@chakra-ui/react";

export const Info = ({
  sx,
  logo,
  color,
  showLogo,
  showButton,
  title,
  text,
}) => {
  return (
    <Box
      sx={sx}
      w="50%"
      h="600px"
      display="flex"
      alignContent="center"
      flexDirection="column"
      padding="4rem"
    >
      {showLogo && (
        <Text
          color={color}
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize="calc(12px + 0.390625vw)"
          padding="0 0 1rem 0"
        >
          {logo}
        </Text>
      )}
      <Text
        color={color}
        fontFamily="Cormorant Garamond"
        fontSize="calc(37px + 0.390625vw)"
        fontWeight="bold"
        padding="0 0 1rem 0"
      >
        {title}
      </Text>
      <Text
        color={color}
        fontFamily="Public Sans"
        fontSize="calc(17px + 0.390625vw)"
        padding="0 0 1rem 0"
      >
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
          fontSize="calc(12px + 0.390625vw)"
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
