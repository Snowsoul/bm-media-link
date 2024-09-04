import React from "react";
import SubTitleStyled from "./SubTitle.styled";
const { Text } = SubTitleStyled;

interface SubTitleProps {
  label: string;
}

function SubTitle({ label }: SubTitleProps) {
  return <Text>{label}</Text>;
}

export default SubTitle;
