import { Box } from "@chakra-ui/react";
import { Photo } from "./Photo";
import { Info } from "./Info";
import { SubHeader } from "./SubHeader";

export const Summary = () => {
  const leftInfo = {
    logo: "VITIM TECHNOLOGIES",
    title: "Your application deserves more.",
    text: "Using the best tools to provide high quality and a superior performance for your website. More than 20 companies claimed our services and all ofthem got their problems and mistakes solved. Discover how we can help your software.",
  };

  return (
    <Box marginTop="100px">
      <SubHeader />
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          "@media (max-width: 800px)": {
            flexDirection: "column",
          },
        }}
      >
        <Info
          sx={{
            "@media (max-width: 800px)": {
              width: "100%",
              height: "500px",
              padding: "3rem 4rem 0 4rem",
            },
            "@media (max-width: 460px)": {
              width: "100%",
              height: "620px",
              padding: "3rem 4rem 0rem 4rem",
            },
          }}
          color="black"
          showLogo={true}
          showButton={true}
          logo={leftInfo.logo}
          title={leftInfo.title}
          text={leftInfo.text}
        />
        <Photo
          sx={{
            "@media (max-width: 800px)": {
              width: "100%",
            },
            "@media (max-width: 400px)": {
              display: "none",
            },
          }}
          margin="2rem 0 0 0"
          width="50%"
          height="600px"
          borderRadius="10px"
          boxSize="90%"
          alt="software engineer working"
          imgUrl="https://www.certasolucoes.com/wp-content/uploads/2020/11/gr7-tecnologia-suporte-tecnico-TI-manaus-cftv-manaus-cameras-de-seguranca-manaus-sistema-para-motel-manaus-infraestrutura-de-redes-manaus-768x605.png"
        />
      </Box>
    </Box>
  );
};
