import styled, { css } from "styled-components";
import BaseText from "../BaseText/BaseText.styled";
import scaleTransition from "../../utils/scaleTransition";

interface ContainerProps {
  hero: boolean;
}

const LinkButtonStyled = {
  Container: styled.button<ContainerProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 26px;
    background-color: rgba(26, 26, 26, 0.79);
    border-radius: 51px;
    padding: 10px 0;
    width: 300px;
    border: 0;
    cursor: pointer;

    ${(props) =>
      props.hero &&
      css`
        border: 2px solid #454545;
      `}

    ${scaleTransition}
  `,
  IconContainer: styled.div`
    display: flex;
    flex: 1;
    margin-right: 4px;
    margin-left: 16px;
    max-width: 30%;
  `,
  Label: styled(BaseText)`
    flex: 1;
    color: #fff;
  `,
};

export default LinkButtonStyled;
