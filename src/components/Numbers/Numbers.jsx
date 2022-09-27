import { Box, Text } from "@chakra-ui/react";

export const Numbers = () => {
  return (
    <Box
      sx={{
        "@media (max-width: 550px)": {
          flexDirection: "column",
          height: "500px",
        },
      }}
      className="reveal"
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-evenly"
      width="100%"
      height="300px"
      bgColor="green.400"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="250px"
      >
        <Text fontFamily="Raleway" fontSize="calc(68px + 0.390625vw)">
          +25K
        </Text>
        <Text
          fontFamily="Public Sans"
          fontSize="calc(17px + 0.390625vw)"
          marginLeft="2rem"
        >
          written lines of modern and advanced code
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="250px"
      >
        <Text fontFamily="Raleway" fontSize="calc(68px + 0.390625vw)">
          +20
        </Text>
        <Text
          fontFamily="Public Sans"
          fontSize="calc(17px + 0.390625vw)"
          marginLeft="1.6rem"
        >
          websites and mobile applications revigorated
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="250px"
      >
        <Text fontFamily="Raleway" fontSize="calc(68px + 0.390625vw)">
          456
        </Text>
        <Text
          fontFamily="Public Sans"
          fontSize="calc(17px + 0.390625vw)"
          marginLeft="2rem"
        >
          days of learning and personal improvement
        </Text>
      </Box>
    </Box>
  );
};
