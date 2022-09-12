import { Box, Text } from "@chakra-ui/react";

export const Mission = () => {
  return (
    <Box
      width="100%"
      height="430px"
      display="flex"
      alignItems="center"
      flexDirection="row"
    >
      <Box
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
          padding="0 0 1rem 0"
        >
          MISSION
        </Text>
        <Text fontFamily="Cormorant Garamond" fontSize="50px" fontWeight="bold">
          No task left behind.
        </Text>
      </Box>
      <Box w="50%">
        <Text padding="0 3rem 1.5rem 0" fontFamily="Public Sans" fontSize="xl">
          We believe patients should not be forced to choose between staying
          healthy and putting food on the table. Atlas Health's mission is to
          save and improve lives by ensuring everyone can access and afford
          care. We enroll patients in the best medical financial aid programs
          available.
        </Text>
        <Text padding="0 3rem 1rem 0" fontFamily="Public Sans" fontSize="xl">
          The financial reality of healthcare is challenging. Your hospital or
          health system deserves a patient assistance and health equity solution
          that captures every dollar and every opportunity to help patients.
        </Text>
      </Box>
    </Box>
  );
};
