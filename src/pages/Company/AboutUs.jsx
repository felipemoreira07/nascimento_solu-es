import { Box, Divider, Img, Text } from "@chakra-ui/react";
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

  return (
    <>
      <Header />
      <SubHeader />

      <Box
        sx={{
          "@media (max-width: 800px)": {
            flexDirection: "column",
            height: "750px",
          },
        }}
        display="flex"
        flexDirection="row"
        bgColor="white"
        height="500px"
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
          borderRadius="10px"
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
            height: "400px",
          },
        }}
        className="reveal"
        bgColor="white"
        height="680px"
        display="flex"
        flexDirection="row"
      >
        <Box
          sx={{
            "@media (max-width: 876px)": {
              flexDirection: "column",
              height: "400px",
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
            borderRadius="10px"
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
          borderRadius="10px"
          imgUrl="https://assets.website-files.com/61adf2412244af0f9852032f/61ba3b5f1e93d88b8c87910c_About_Approach.jpg"
        />

        <Box
          sx={{
            "@media (max-width: 876px)": {
              width: "100%",
            },
          }}
          w="50%"
          h="600px"
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
            fontSize="40px"
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

          <Divider />

          <Text
            color="black"
            fontFamily="Public Sans"
            fontSize="xl"
            padding="2rem 0 1rem 0"
          >
            {leftInfo3.text}
          </Text>
        </Box>
      </Box>

      <Box
        className="reveal"
        w="100%"
        h="600px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            "@media (max-width: 400px)": {
              h: "550px",
              padding: "2rem",
            },
          }}
          w="75%"
          h="450px"
          padding="5rem"
          bgColor="blue.800"
          borderRadius="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Img
            alt="heart"
            w="80px"
            h="80px"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba498e79d07b7c8a3818b2_Icon_About_Heart.svg"
          />

          <Text
            fontFamily="Cormorant Garamond"
            fontSize="calc(25px + 0.390625vw)"
            color="white"
            lineHeight="normal"
            textAlign="center"
          >
            Our mission is to enroll patients in the best medical financial aid
            programs available
          </Text>

          <Text
            fontFamily="Public Sans"
            fontSize="calc(15px + 0.390625vw)"
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
            h: "600px",
          },
          "@media (max-width: 400px)": {
            h: "1000px",
            padding: "0 0 300px 0",
          },
        }}
        h="500px"
        w="100%"
        padding="0 0 120px 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          sx={{
            "@media (max-width: 900px)": {
              padding: "100px 0 120px 0",
            },
          }}
          fontSize="40px"
          fontFamily="Cormorant Garamond"
          fontWeight="bold"
          padding="150px 0 120px 0"
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
          h="180px"
          gap="60px"
          padding="0 0 220px 0"
        >
          <Img
            margin="auto"
            w="190px"
            h="50px"
            alt="Felicis"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d5ab02ce28f0016d2b4682_Felicis_Logo-p-500.png"
          />

          <Img
            margin="auto"
            w="200px"
            h="50px"
            alt="GreatPoint"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d842a1dec49af59f216314_Greatpoint_Logo.svg"
          />

          <Img
            margin="auto"
            w="100px"
            h="40px"
            alt="GFC"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba34759a672323277234e1_GFC_Logo.svg"
          />

          <Img
            margin="auto"
            w="190px"
            h="50px"
            alt="MBX Capital"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d841cc265d2d50460a9db8_MXB_Cap_Logo.svg"
          />

          <Img
            margin="auto"
            w="240px"
            h="30px"
            alt="Tribe Capital"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61d5b21dbc9e1a71ec60ebfd_Tribe-capital_Logo-p-500.png"
          />

          <Img
            margin="auto"
            w="160px"
            h="50px"
            alt="Stanford University"
            src="https://assets.website-files.com/61adf2412244af0f9852032f/61ba32be204f516c41eb83de_Stanford_Logo.svg"
          />
        </Box>
      </Box>

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
              width: "300px",
            },
            "@media (max-width: 635px)": {
              order: "1",
              marginLeft: "60px",
              height: "1000px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              widht: "260px",
            },
          }}
          paddingTop="80px"
          marginLeft="100px"
          h="100%"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
        >
          <Box display="flex" flexDirection="column" gap="15px">
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
