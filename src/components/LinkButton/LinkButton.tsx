import React from "react";
import LinkButtonStyled from "./LinkButton.styled";
import Icon from "../Icon/Icon";

const { Container, IconContainer, Label } = LinkButtonStyled;

type icon = "instagram" | "youtube" | (string & {});

const Icons: Record<any, any> = {
  instagram: Icon.Instagram,
  youtube: Icon.Youtube,
};

interface LinkButtonProps {
  label: string;
  icon?: icon;
  hero?: boolean;
}

function LinkButton({ label, icon, hero = false }: LinkButtonProps) {
  const ButtonIcon = icon ? Icons[icon] : <></>;

  return (
    <Container hero={hero}>
      <IconContainer>
        <ButtonIcon />
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
}

export default LinkButton;
