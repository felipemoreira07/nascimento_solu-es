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

  const navOptions = [
    {
      id: "1",
      name: "Home",
      url: "/",
    },
    {
      id: "2",
      name: "Solution",
      url: "/",
    },
    {
      id: "3",
      name: "Impact",
      url: "/",
    },
    {
      id: "4",
      name: "Resources",
      url: "/",
    },
  ];

  const firstSubNavOptions = [
    {
      id: "1",
      name: "KLS Reports",
      url: "/",
    },
    {
      id: "2",
      name: "Case Studies",
      url: "/",
    },
    {
      id: "3",
      name: "Patient Stories",
      url: "/",
    },
    {
      id: "4",
      name: "Blog",
      url: "/",
    },
    {
      id: "5",
      name: "White Papers",
      url: "/",
    },
    {
      id: "6",
      name: "Webinars",
      url: "/",
    },
    {
      id: "7",
      name: "Events",
      url: "/",
    },
  ];

  const secondSubNavOptions = [
    {
      id: "1",
      name: "About Us",
      url: "/",
    },
    {
      id: "2",
      name: "Leadership",
      url: "/",
    },
    {
      id: "3",
      name: "Careers",
      url: "/",
    },
    {
      id: "4",
      name: "Security",
      url: "/",
    },
    {
      id: "5",
      name: "Press",
      url: "/",
    },
    {
      id: "6",
      name: "News",
      url: "/",
    },
  ];

  const thirdSubNavOptions = [
    {
      id: "1",
      name: "Contact Us",
      url: "/",
    },
    {
      id: "2",
      name: "ROI Assessment",
      url: "/",
    },
    {
      id: "3",
      name: "Demo",
      url: "/",
    },
    {
      id: "4",
      name: "Privacy",
      url: "/",
    },
  ];

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
            height: "100%",
          },
        }}
        h="38.75rem"
        w="100%"
        bgColor="green.800"
        display="flex"
        flexDirection="row"
      >
        <Box
          sx={{
            "@media (max-width: 760px)": {
              order: "2",
              padding: "0 0 0 3.75rem",
            },
            "@media (max-width: 635px)": {
              order: "2",
              padding: "3rem 0 3rem 3.75rem",
              width: "15.625rem",
            },
          }}
          height="100%"
          w="25rem"
          display="flex"
          flexDirection="column"
          padding="5rem 0 0 3.75rem"
          color="white"
          gap="1rem"
        >
          <Link
            to="/"
            style={{
              width: "10rem",
              fontWeight: "bold",
              fontFamily: "Raleway",
              fontSize: "1.25rem",
            }}
          >
            VITIM
          </Link>

          <Text fontFamily="Raleway" fontSize="xl" fontWeight="bold">
            Follow us
          </Text>

          <Box w="2.5rem" h="2.5rem">
            <a href="https://www.linkedin.com/in/dev-victor-nascimento/">
              <Img src="https://assets.website-files.com/61adf2412244af0f9852032f/61b9f96f6bd2246f6f57aba6_LinkedIn_Logo-p-500.png" />
            </a>
          </Box>

          <Box marginTop="0.75rem">
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
              marginLeft: "3.75rem",
              height: "100%",
              width: "18.75rem",
            },
            "@media (max-width: 635px)": {
              order: "1",
              marginLeft: "3.75rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              widht: "16.25rem",
            },
          }}
          paddingTop="5rem"
          marginLeft="6rem"
          h="100%"
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
        >
          <Box display="flex" flexDirection="column" gap="1rem">
            {navOptions.map((navOption) => {
              return (
                <Link
                  key={navOption.id}
                  to={navOption.url}
                  style={{
                    color: "white",
                    fontFamily: "Raleway",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {navOption.name}
                </Link>
              );
            })}
            {firstSubNavOptions.map((navOption) => {
              return (
                <Link
                  key={navOption.id}
                  to={navOption.url}
                  style={{
                    color: "white",
                    fontFamily: "Raleway",
                    fontSize: "1.25rem",
                  }}
                >
                  {navOption.name}
                </Link>
              );
            })}
          </Box>
          <Box display="flex" flexDirection="column" gap="1rem">
            <Link
              to="/about-us"
              style={{
                color: "white",
                fontFamily: "Raleway",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Company
            </Link>
            {secondSubNavOptions.map((navOption) => {
              return (
                <Link
                  key={navOption.id}
                  to={navOption.url}
                  style={{
                    color: "white",
                    fontFamily: "Raleway",
                    fontSize: "1.25rem",
                  }}
                >
                  {navOption.name}
                </Link>
              );
            })}
          </Box>

          <Box display="flex" flexDirection="column" gap="1rem">
            <Text
              color="white"
              fontFamily="Raleway"
              fontSize="xl"
              fontWeight="bold"
            >
              Contact
            </Text>
            {thirdSubNavOptions.map((navOption) => {
              return (
                <Link
                  key={navOption.id}
                  to={navOption.url}
                  style={{
                    color: "white",
                    fontFamily: "Raleway",
                    fontSize: "1.25rem",
                  }}
                >
                  {navOption.name}
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
