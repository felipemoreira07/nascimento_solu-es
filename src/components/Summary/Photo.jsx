import { Box, Image } from "@chakra-ui/react";

export const Photo = ({
  sx,
  imgUrl,
  margin,
  width,
  height,
  alt,
  boxSize,
  borderRadius,
}) => {
  return (
    <Box sx={sx} width={width} height={height}>
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
