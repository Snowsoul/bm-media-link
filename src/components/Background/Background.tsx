import React from "react";
import BackgroundStyled from "./Background.styled";

const { Container, Image } = BackgroundStyled;

interface BackgroundProps {
  image?: string;
}

function Background({ image }: BackgroundProps) {
  return <Container>{image && <Image src={image} />}</Container>;
}

export default Background;
