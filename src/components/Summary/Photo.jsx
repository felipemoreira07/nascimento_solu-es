import { Box, Image } from "@chakra-ui/react";

export const Photo = ({
  imgUrl,
  margin,
  width,
  height,
  alt,
  boxSize,
  borderRadius,
}) => {
  return (
    <Box width={width} height={height}>
      <Image
        borderRadius={borderRadius}
        src={imgUrl}
        alt={alt}
        boxSize={boxSize}
        margin={margin}
      />
    </Box>
  );
};
