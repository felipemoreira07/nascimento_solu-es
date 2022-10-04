import { Box, Img, Text } from "@chakra-ui/react";

export const Paper = () => {
  return (
    <Box
      w="28rem"
      h="18.75rem"
      bgColor="white"
      borderRadius="1.25rem"
      padding="2rem"
      position="relative"
      left="36.25rem"
      bottom="22rem"
    >
      <Text color="blue.800" fontFamily="Public Sans" fontSize="1rem">
        “When I saw how Atlas simplified and automated the work, I knew they
        could help us grow and easily double the number of patients receiving
        aid and reimbursements.”
      </Text>
      <Box display="flex" flexDirection="row" marginTop="2rem">
        <Img
          width="4.25rem"
          height="4.25rem"
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
