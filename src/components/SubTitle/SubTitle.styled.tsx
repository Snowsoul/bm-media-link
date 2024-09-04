import styled from "styled-components";
import BaseText from "../BaseText/BaseText.styled";

const SubTitleStyled = {
  Text: styled(BaseText)`
    font-size: 10px;
    color: ${(props) => props.theme.colors.lightGrey};
  `,
};

export default SubTitleStyled;
