import { Box, Text, Link } from "@chakra-ui/react";

export const SubHeader = () => {
  return (
    <Box
      sx={{
        "@media (max-width: 630px)": {
          height: "4.3rem",
        },
        "@media (max-width: 336px)": {
          height: "5.5rem",
        },
      }}
      marginTop="6rem"
      w="100%"
      h="3.125rem"
      bg="green.200"
      textAlign="center"
      p="0.625rem 0"
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
