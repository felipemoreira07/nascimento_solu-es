import { Image } from "@chakra-ui/react";

export const Photo = ({
  sx,
  imgUrl,
  margin,
  width,
  height,
  alt,
  boxSize,
  borderRadius,
  className,
}) => {
  return (
    <Image
      className={className}
      borderRadius={borderRadius}
      src={imgUrl}
      alt={alt}
      boxSize={boxSize}
      sx={sx}
      width={width}
      height={height}
      margin={margin}
    />
  );
};
