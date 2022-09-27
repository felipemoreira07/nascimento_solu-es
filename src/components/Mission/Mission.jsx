import { Box, Text } from "@chakra-ui/react";

export const Mission = () => {
  return (
    <Box
      sx={{
        "@media (max-width: 800px)": {
          flexDirection: "column",
        },
        "@media (max-width: 500px)": {
          height: "530px",
        },
      }}
      className="reveal"
      width="100%"
      height="430px"
      display="flex"
      alignItems="center"
      flexDirection="row"
    >
      <Box
        sx={{
          "@media (max-width: 800px)": {
            width: "100%",
            padding: "3rem 4rem 2rem 2rem",
          },
        }}
        w="50%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="4rem"
      >
        <Text
          color="green.800"
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize="calc(12px + 0.390625vw)"
          padding="0 0 1rem 0"
        >
          MISSION
        </Text>
        <Text
          fontFamily="Cormorant Garamond"
          fontSize="calc(47px + 0.390625vw)"
          fontWeight="bold"
        >
          No task left behind.
        </Text>
      </Box>
      <Box
        sx={{
          "@media (max-width: 800px)": {
            width: "100%",
          },
        }}
        w="50%"
      >
        <Text
          sx={{
            "@media (max-width: 800px)": {
              padding: "0 2rem 1rem 2rem",
            },
          }}
          padding="0 3rem 1.5rem 0"
          fontFamily="Public Sans"
          fontSize="calc(12px + 0.390625vw)"
        >
          We believe patients should not be forced to choose between staying
          healthy and putting food on the table. Atlas Health's mission is to
          save and improve lives by ensuring everyone can access and afford
          care. We enroll patients in the best medical financial aid programs
          available.
        </Text>
        <Text
          sx={{
            "@media (max-width: 800px)": {
              padding: "0 2rem 1rem 2rem",
            },
          }}
          padding="0 3rem 1rem 0"
          fontFamily="Public Sans"
          fontSize="calc(12px + 0.390625vw)"
        >
          The financial reality of healthcare is challenging. Your hospital or
          health system deserves a patient assistance and health equity solution
          that captures every dollar and every opportunity to help patients.
        </Text>
      </Box>
    </Box>
  );
};
