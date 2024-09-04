import React from "react";
import AvatarLabelStyled from "./AvatarLabel.styled";

const { Container, Label } = AvatarLabelStyled;

interface AvatarLabelProps {
  label: string;
}

function AvatarLabel({ label }: AvatarLabelProps) {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
}

export default AvatarLabel;
