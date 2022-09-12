import { Box } from "@chakra-ui/react";
import { Photo } from "./Photo";
import { Left } from "./Left";
import { SubHeader } from "./SubHeader";

export const Summary = () => {
  const leftInfo = {
    title: "Your application deserves more.",
    text: "Using the best tools to provide high quality and a superior performance for your website. More than 20 companies claimed our services and all ofthem got their problems and mistakes solved. Discover how we can help your software.",
  };

  return (
    <Box marginTop="100px">
      <SubHeader />
      <Box display="flex" flexDirection="row">
        <Left
          showLogo={true}
          showButton={true}
          title={leftInfo.title}
          text={leftInfo.text}
        />
        <Photo
          margin="2rem 0 0 0"
          width="50%"
          height="600px"
          borderRadius="10px"
          boxSize="90%"
          alt="software engineers working"
          imgUrl="https://www.certasolucoes.com/wp-content/uploads/2020/11/gr7-tecnologia-suporte-tecnico-TI-manaus-cftv-manaus-cameras-de-seguranca-manaus-sistema-para-motel-manaus-infraestrutura-de-redes-manaus-768x605.png"
        />
      </Box>
    </Box>
  );
};
