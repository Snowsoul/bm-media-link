import React from "react";
import TitleStyled from "./Title.styled";
const { Text } = TitleStyled;

interface TitleProps {
  label: string;
}

function Title({ label }: TitleProps) {
  return <Text>{label}</Text>;
}

export default Title;
