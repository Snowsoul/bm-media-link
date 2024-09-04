import styled from "styled-components";
import BaseText from "../BaseText/BaseText.styled";

const TitleStyled = {
  Text: styled(BaseText)`
    font-size: 24px;
    color: ${(props) => props.theme.colors.white};
  `,
};

export default TitleStyled;
