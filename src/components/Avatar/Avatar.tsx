import React from "react";
import AvatarStyled from "./Avatar.styled";

const { Container, Image } = AvatarStyled;

interface AvatarProps {
  image: string;
}

function Avatar({ image }: AvatarProps) {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
}

export default Avatar;
