import React, { Fragment } from "react";
import AppStyled, { GlobalStyle } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme/mainTheme";
import Background from "./components/Background/Background";
import testbg from "./assets/images/test-bg.png";
import TopSection from "./sections/TopSection/TopSection";

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
          </Content>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
