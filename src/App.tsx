import React, { Fragment } from "react";
import AppStyled, { GlobalStyle } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme/mainTheme";
import Background from "./components/Background/Background";
import testbg from "./assets/images/test-bg.png";
import TopSection from "./sections/TopSection/TopSection";
import MiddleSection from "./sections/MiddleSection/MiddleSection";

const { Container, Content } = AppStyled;

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Container>
          <Background image={testbg} />
          <Content>
            <TopSection />
            <MiddleSection />
          </Content>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
