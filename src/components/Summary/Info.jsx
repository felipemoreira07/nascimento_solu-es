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
      h="100%"
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
          fontSize="xl"
          padding="0 0 1rem 0"
        >
          {logo}
        </Text>
      )}
      <Text
        color={color}
        fontFamily="Cormorant Garamond"
        fontSize="calc(2.25rem + 0.390625vw)"
        fontWeight="bold"
        padding="0 0 1rem 0"
      >
        {title}
      </Text>
      <Text
        color={color}
        fontFamily="Public Sans"
        fontSize="xl"
        padding="0 0 1rem 0"
      >
        {text}
      </Text>
      {showButton && (
        <Box
          sx={{
            "@media (max-width: 500px)": {
              width: "100%",
            },
          }}
          as="button"
          width="50%"
          height="4rem"
          bgColor="green.700"
          color="white"
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize="xl"
          _hover={{
            bg: "green.400",
          }}
          marginTop="1.25rem"
          borderRadius="0.7rem"
        >
          Get VITIM Assistance
        </Box>
      )}
    </Box>
  );
};
