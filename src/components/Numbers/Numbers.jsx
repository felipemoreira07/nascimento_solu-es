import { Box, Text } from "@chakra-ui/react";

export const Numbers = () => {
  return (
    <Box
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
        <Text fontFamily="Raleway" fontSize="7xl">
          +25K
        </Text>
        <Text fontFamily="Public Sans" fontSize="xl" marginLeft="2rem">
          written lines of modern and advanced code
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="250px"
      >
        <Text fontFamily="Raleway" fontSize="7xl">
          +20
        </Text>
        <Text fontFamily="Public Sans" fontSize="xl" marginLeft="1.6rem">
          websites and mobile applications revigorated
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="250px"
      >
        <Text fontFamily="Raleway" fontSize="7xl">
          456
        </Text>
        <Text fontFamily="Public Sans" fontSize="xl" marginLeft="2rem">
          days of learning and personal improvement
        </Text>
      </Box>
    </Box>
  );
};
