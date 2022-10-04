import { Box, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Photo } from "../../components/Summary/Photo";
import { Info } from "../../components/Summary/Info";
import { SubHeader } from "../../components/Summary/SubHeader";

import "../../styles/revealOnScroll.css";

export const AboutUs = () => {
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

  const leftInfo1 = {
    title: "Connecting Your Patients With Philanthropic Aid",
    text: "Atlas Health helps hospitals and health systems save and improve lives by ensuring every patient can access and afford care they deserve.",
  };

  const leftInfo2 = {
    logo: "WHY WE EXIST?",
    title:
      "There Are 20,000+ Philanthropic Medical Financial Aid Programs That Fund Patient Care",
    text: "Each patient assistance and health equity program has different applications, eligibility rules, enrollment policies, and reimbursement processes. Many programs open and close regularly based on level of funds, number of enrolled patients, and other factors.",
  };

  const leftInfo3 = {
    logo: "OUR IMPACT",
    title: "Our Approach Helps Everyone",
    description:
      "Atlas Health helps patients access and afford care, and we assist hospitals and health systems to get reimbursed.",
    text: "We understand the unique challenges faced when enrolling patients and dealing with coverage gaps. Working on behalf of hospitals and health systems across the country, we configure and implement medical financial aid systems that deliver for years to come.",
  };

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
      <SubHeader />

      <Box
        sx={{
          "@media (max-width: 800px)": {
            flexDirection: "column",
            height: "46.25rem",
          },
        }}
        display="flex"
        flexDirection="row"
        bgColor="white"
        height="31.25rem"
      >
        <Photo
          sx={{
            "@media (max-width: 800px)": {
              width: "80%",
              marginLeft: "0.8rem",
            },
          }}
          alt="man programming"
          width="50%"
          margin="3rem 0 0 2rem"
          borderRadius="0.75rem"
          imgUrl="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v1/image_uploads/eb99bb94-4e82-4a95-9472-0fa09d7fbc8a/original.jpeg"
        />

        <Info
          sx={{
            "@media (max-width: 800px)": {
              width: "100%",
              padding: "2rem 4rem 0 4rem",
            },
          }}
          color="black"
          showLogo={false}
          showButton={false}
          title={leftInfo1.title}
          text={leftInfo1.text}
        />
      </Box>
      <Box
        sx={{
          "@media (max-width: 800px)": {
            flexDirection: "column",
            height: "25rem",
          },
        }}
        className="reveal"
        bgColor="white"
        height="42.5rem"
        display="flex"
        flexDirection="row"
      >
        <Box
          sx={{
            "@media (max-width: 876px)": {
              flexDirection: "column",
              height: "25rem",
            },
          }}
          display="flex"
          flexDirection="row"
        >
          <Info
            sx={{
              "@media (max-width: 876px)": {
                width: "100%",
                padding: "0 4rem 2rem 4rem",
              },
            }}
            color="black"
            showLogo={true}
            showButton={false}
            logo={leftInfo2.logo}
            title={leftInfo2.title}
            text={leftInfo2.text}
          />
          <Photo
            sx={{
              "@media (max-width: 876px)": {
                width: "50%",
                padding: "10rem 0 2rem 2rem ",
              },
            }}
            alt="a hand holding pills"
            width="40%"
            margin="4rem 0 0 2rem"
            borderRadius="0.75rem"
            imgUrl="https://assets.website-files.com/61adf2412244af0f9852032f/61ba459c2c225e06179d6811_Why_We_Exist.jpg"
          />
        </Box>
      </Box>

      <Box
        sx={{
          "@media (max-width: 876px)": {
            flexDirection: "column",
            gap: "0",
          },
        }}
        className="reveal"
        paddingTop="6rem"
        display="flex"
        flexDirection="row"
        gap="6rem"
      >
        <Photo
          sx={{
            "@media (max-width: 876px)": {
              width: "70%",
              padding: "30rem 0 2rem 6rem ",
            },
          }}
          alt="doctor taking care of a baby"
          width="40%"
          margin="4rem 0 2rem 4rem"
          borderRadius="0.75rem"
          imgUrl="https://assets.website-files.com/61adf2412244af0f9852032f/61ba3b5f1e93d88b8c87910c_About_Approach.jpg"
        />

        <Box
          sx={{
            "@media (max-width: 876px)": {
              width: "100%",
              height: "28rem",
            },
            "@media (max-width: 450px)": {
              width: "100%",
              height: "50rem",
            },
          }}
          w="50%"
          h="43.75rem"
          display="flex"
          alignContent="center"
          flexDirection="column"
          padding="4rem"
        >
          <Text
            color="black"
            fontFamily="Raleway"
            fontWeight="bold"
            padding="0 0 1rem 0"
          >
            {leftInfo3.logo}
          </Text>

          <Text
            color="black"
            fontFamily="Cormorant Garamond"
            fontSize="2.5rem"
            fontWeight="bold"
            padding="0 0 1rem 0"
          >
            {leftInfo3.title}
          </Text>

          <Text
            color="black"
            fontFamily="Public Sans"
            fontSize="xl"
            padding="0 0 2rem 0"
          >
            {leftInfo3.description}
          </Text>

          <Text
            color="black"
            fontFamily="Public Sans"
            fontSize="xl"
            padding="0 0 1rem 0"
          >
            {leftInfo3.text}
          </Text>
        </Box>
      </Box>

      <Box
        className="reveal"
        w="100%"
        h="37.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            "@media (max-width: 500px)": {
              h: "33.75rem",
              padding: "2rem",
            },
          }}
          w="75%"
          h="28.125rem"
          padding="5rem"
          bgColor="blue.800"
          borderRadius="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Img
            alt="heart"
            w="5rem"
            h="5rem"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba498e79d07b7c8a3818b2_Icon_About_Heart.svg"
          />

          <Text
            fontFamily="Cormorant Garamond"
            fontSize="calc(1.5rem + 0.390625vw)"
            color="white"
            lineHeight="normal"
            textAlign="center"
          >
            Our mission is to enroll patients in the best medical financial aid
            programs available
          </Text>

          <Text
            fontFamily="Public Sans"
            fontSize="calc(1rem + 0.390625vw)"
            color="white"
            textAlign="center"
            marginTop="1.5rem"
          >
            How many Americans do not seek medical care because they are afraid
            of the bill? How many cannot afford life-saving and life-extending
            treatment? Too many. Join us and help make a difference in people’s
            lives.
          </Text>
        </Box>
      </Box>

      <Box
        sx={{
          "@media (max-width: 900px)": {
            h: "37.5rem",
          },
          "@media (max-width: 400px)": {
            h: "56.25rem",
            padding: "0 0 18.75rem 0",
          },
        }}
        h="31.25rem"
        w="100%"
        padding="0 0 7.5rem 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          sx={{
            "@media (max-width: 900px)": {
              padding: "6rem 0 7.5rem 0",
            },
            "@media (max-width: 500px)": {
              padding: "3rem 0 7.5rem 0",
            },
          }}
          fontSize="2.5rem"
          fontFamily="Cormorant Garamond"
          fontWeight="bold"
          padding="9.3rem 0 7.5rem 0"
        >
          INVESTORS
        </Text>
        <Box
          sx={{
            "@media (max-width: 900px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@media (max-width: 400px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          w="80%"
          h="11.25rem"
          gap="3.75rem"
          padding="0 0 13.75rem 0"
        >
          <Img
            margin="auto"
            w="11.875rem"
            h="3.125rem"
            alt="Felicis"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d5ab02ce28f0016d2b4682_Felicis_Logo-p-500.png"
          />

          <Img
            margin="auto"
            w="12.5rem"
            h="3.125rem"
            alt="GreatPoint"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d842a1dec49af59f216314_Greatpoint_Logo.svg"
          />

          <Img
            margin="auto"
            w="6.25rem"
            h="2.5rem"
            alt="GFC"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba34759a672323277234e1_GFC_Logo.svg"
          />

          <Img
            margin="auto"
            w="12.5rem"
            h="3.125rem"
            alt="MBX Capital"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d841cc265d2d50460a9db8_MXB_Cap_Logo.svg"
          />

          <Img
            margin="auto"
            w="15rem"
            h="1.875rem"
            alt="Tribe Capital"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d5b21dbc9e1a71ec60ebfd_Tribe-capital_Logo-p-500.png"
          />

          <Img
            margin="auto"
            w="10rem"
            h="3.125rem"
            alt="Stanford University"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba32be204f516c41eb83de_Stanford_Logo.svg"
          />
        </Box>
      </Box>

      <Box
        sx={{
          "@media (max-width: 760px)": {
            flexDirection: "column",
            height: "56.25rem",
          },
          "@media (max-width: 635px)": {
            flexDirection: "column",
            height: "87.5rem",
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
              padding: "7.5rem 0 0 3.75rem",
            },
          }}
          height="12.5rem"
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
              fontSize: "calc(2.75rem + 0.390625vw)",
            }}
          >
            VITIM
          </Link>

          <Text
            fontFamily="Raleway"
            fontSize="calc(1rem + 0.390625vw)"
            fontWeight="bold"
          >
            Follow us
          </Text>

          <Box w="2.5rem" h="2.5rem">
            <a href="https://www.linkedin.com/in/dev-victor-nascimento/">
              <Img src="https://assets.website-files.com/61adf2412244af0f9852032f/61b9f96f6bd2246f6f57aba6_LinkedIn_Logo-p-500.png" />
            </a>
          </Box>

          <Box marginTop="0.625rem">
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
              height: "37.5rem",
              width: "18.75rem",
            },
            "@media (max-width: 635px)": {
              order: "1",
              marginLeft: "3.75rem",
              height: "62.5rem",
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
                    fontSize: "calc(1rem + 0.390625vw)",
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
                    fontSize: "calc(1rem + 0.390625vw)",
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
                fontSize: "calc(1rem + 0.390625vw)",
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
                    fontSize: "calc(1rem + 0.390625vw)",
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
              fontSize="calc(1rem + 0.390625vw)"
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
                    fontSize: "calc(1rem + 0.390625vw)",
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
