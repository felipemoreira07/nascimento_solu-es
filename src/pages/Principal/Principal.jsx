import { Header } from "../../components/Header/Header";
import { Mission } from "../../components/Mission/Mission";
import { Numbers } from "../../components/Numbers/Numbers";
import { Summary } from "../../components/Summary/Summary";

import { Box, Text, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "../../styles/revealOnScroll.css";

export const Principal = () => {
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowheight = window.innerHeight;
      const revealtop = reveals[i].getBoundingClientRect().top;
      const revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <Header />
      <Summary />
      <Numbers />
      <Mission />

      <Box
        sx={{
          "@media (max-width: 760px)": {
            flexDirection: "column",
            height: "900px",
          },
          "@media (max-width: 635px)": {
            flexDirection: "column",
            height: "1400px",
          },
        }}
        h="620px"
        w="100%"
        bgColor="green.800"
        display="flex"
        flexDirection="row"
      >
        <Box
          sx={{
            "@media (max-width: 760px)": {
              order: "2",
              padding: "0 0 0 60px",
            },
            "@media (max-width: 635px)": {
              order: "2",
              padding: "120px 0 0 60px",
              width: "250px",
            },
          }}
          height="200px"
          w="400px"
          display="flex"
          flexDirection="column"
          padding="80px 0 0 60px"
          color="white"
          gap="15px"
        >
          <Link
            to="/"
            style={{
              width: "150px",
              fontWeight: "bold",
              fontFamily: "Raleway",
              fontSize: "calc(45px + 0.390625vw)",
            }}
          >
            VITIM
          </Link>

          <Text
            fontFamily="Raleway"
            fontSize="calc(17px + 0.390625vw)"
            fontWeight="bold"
          >
            Follow us
          </Text>

          <Box w="40px" h="40px">
            <a href="https://www.linkedin.com/in/dev-victor-nascimento/">
              <Img src="https://assets.website-files.com/61adf2412244af0f9852032f/61b9f96f6bd2246f6f57aba6_LinkedIn_Logo-p-500.png" />
            </a>
          </Box>

          <Box marginTop="10px">
            <Text fontWeight="bold" fontFamily="Raleway">
              ©2022 Atlas Labs, Inc.
            </Text>
            <Text fontWeight="bold" fontFamily="Raleway">
              All rights reserved.
            </Text>
          </Box>
        </Box>

        <Box
          sx={{
            "@media (max-width: 760px)": {
              order: "1",
              marginLeft: "60px",
              height: "600px",
              width: "320px",
            },
            "@media (max-width: 635px)": {
              order: "1",
              marginLeft: "60px",
              height: "1000px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "280px",
            },
          }}
          paddingTop="80px"
          marginLeft="100px"
          w="100%"
          h="100%"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
        >
          <Box w="50%" display="flex" flexDirection="column" gap="15px">
            <Link
              to="/"
              style={{
                color: "white",
                fontFamily: "Raleway",
                fontSize: "calc(17px + 0.390625vw)",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
              fontWeight="bold"
            >
              Solution
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
              fontWeight="bold"
            >
              Impact
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
              fontWeight="bold"
            >
              Resources
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              KLS Reports
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Case Studies
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Patient Stories
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Blog
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              White Papers
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Webinars
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Events
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="15px">
            <Link
              to="/about-us"
              style={{
                color: "white",
                fontFamily: "Raleway",
                fontSize: "calc(17px + 0.390625vw)",
                fontWeight: "bold",
              }}
            >
              Company
            </Link>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              About Us
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Leadership Team
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Careers
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Security
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Press
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              News
            </Text>
          </Box>

          <Box display="flex" flexDirection="column" gap="15px">
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
              fontWeight="bold"
            >
              Contact
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Contact Us
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              ROI Assessment
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Demo
            </Text>
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="calc(17px + 0.390625vw)"
            >
              Privacy
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
