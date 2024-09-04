import styled from "styled-components";
import BaseText from "../BaseText/BaseText.styled";

const AvatarLabelStyled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.black};
    padding: 4px 20px;
    border-radius: 60px;
  `,
  Label: styled(BaseText)`
    color: ${(props) => props.theme.colors.white};
    font-size: 10px;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  `,
};

export default AvatarLabelStyled;
