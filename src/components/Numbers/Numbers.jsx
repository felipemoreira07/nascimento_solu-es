import { Box, Text } from "@chakra-ui/react";

export const Numbers = () => {
  const numbersInfo = [
    {
      id: "1",
      number: "+25K",
      description: "written lines of modern and advanced code",
    },
    {
      id: "2",
      number: "+20",
      description: "websites and mobile applications revigorated",
    },
    {
      id: "3",
      number: "456",
      description: "days of learning and personal improvement",
    },
  ];

  return (
    <Box
      sx={{
        "@media (max-width: 550px)": {
          flexDirection: "column",
          height: "100%",
        },
      }}
      className="reveal"
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-evenly"
      width="100%"
      height="18.75rem"
      bgColor="green.400"
    >
      {numbersInfo.map((numberInfo) => {
        return (
          <Box
            key={numberInfo.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="15.5rem"
            padding="2rem"
          >
            <Text fontFamily="Raleway" fontSize="7xl">
              {numberInfo.number}
            </Text>
            <Text fontFamily="Public Sans" fontSize="xl" marginLeft="2rem">
              {numberInfo.description}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};
