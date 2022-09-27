import { Box, Img, Text } from "@chakra-ui/react";

export const Paper = () => {
  return (
    <Box
      w="450px"
      h="300px"
      bgColor="white"
      borderRadius="20px"
      padding="2rem"
      position="relative"
      left="580px"
      bottom="350px"
    >
      <Text color="blue.800" fontFamily="Public Sans" fontSize="18px">
        “When I saw how Atlas simplified and automated the work, I knew they
        could help us grow and easily double the number of patients receiving
        aid and reimbursements.”
      </Text>
      <Box display="flex" flexDirection="row" marginTop="2rem">
        <Img
          width="70px"
          height="70px"
          src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba523326e971a278fe61f9_Icon_About_PillBottle.svg"
        />
        <Box display="flex" flexDirection="column" marginLeft="0.5rem">
          <Text color="blue.800" fontFamily="Public Sans">
            Mark Beilstein
          </Text>
          <Text color="gray.400" fontFamily="Public Sans">
            Executive Director of Revenue Cycle, King's Daughter Medical Center
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
