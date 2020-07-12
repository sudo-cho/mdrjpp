import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";

import F1 from "./F1.js";
import GlobalFonts from "./fonts.js";
import Home from "./Home.js";

const ResetStyles = createGlobalStyle`
  ${reset};

`;

const Wrapper = styled.div`
  background: teal;
  min-height: 100vh;
  height: 100%;
  padding: 5em;
  font-family: "MSSerif";
  font-size: 11px;
  box-sizing: border-box;
`;

function App() {
  return (
    <ThemeProvider theme={themes.default}>
      <GlobalFonts />
      <ResetStyles />
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/f1">
              <F1 />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
