import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.darkGrey};
    margin: 0;
  }
`;

const AppStyled = {
  Container: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin: ${(props) => props.theme.margins.big} 0px;
  `,
  Content: styled.div`
    display: flex;
    z-index: 2;
    width: 400px;
    height: 300px;
    /* background-color: ${(props) => props.theme.colors.white}; */
  `,
};

export default AppStyled;
