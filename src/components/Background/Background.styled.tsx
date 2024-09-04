import styled from "styled-components";

const BackgroundStyled = {
  Container: styled.div`
    background-color: ${(props) => props.theme.colors.darkGrey};
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  `,

  Image: styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: blur(8px);
  `,
};

export default BackgroundStyled;
