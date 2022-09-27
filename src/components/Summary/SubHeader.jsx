import { Box, Text, Link } from "@chakra-ui/react";

export const SubHeader = () => {
  return (
    <Box
      sx={{
        "@media (max-width: 630px)": {
          height: "70px",
        },
        "@media (max-width: 336px)": {
          height: "90px",
        },
      }}
      marginTop="100px"
      w="100%"
      h="50px"
      bg="green.200"
      textAlign="center"
      p="10px 0"
    >
      <Text fontFamily="Public Sans">
        <Text as="b">Explore</Text>: High client ratings in{" "}
        <Link color="green.700" href="#">
          KLAS Report
        </Link>
        + Best practices{" "}
        <Link color="green.700" href="#">
          on-demand webinar
        </Link>
      </Text>
    </Box>
  );
};
