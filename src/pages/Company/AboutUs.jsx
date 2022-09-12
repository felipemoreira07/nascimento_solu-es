import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Photo } from "../../components/Summary/Photo";
import { Left } from "../../components/Summary/Left";
import { SubHeader } from "../../components/Summary/SubHeader";

export const AboutUs = () => {
  const leftInfo = {
    title: "Connecting Your Patients With Philanthropic Aid",
    text: "Atlas Health helps hospitals and health systems save and improve lives by ensuring every patient can access and afford care they deserve.",
  };

  return (
    <>
      <Header />
      <SubHeader />
      <Box display="flex" flexDirection="row" bgColor="blue.200">
        <Photo
          alt="man programming"
          width="50%"
          margin="4rem 0 0 2rem"
          borderRadius="10px"
          imgUrl="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v1/image_uploads/eb99bb94-4e82-4a95-9472-0fa09d7fbc8a/original.jpeg"
        />
        <Left
          showLogo={false}
          showButton={false}
          title={leftInfo.title}
          text={leftInfo.text}
        />
      </Box>
    </>
  );
};
