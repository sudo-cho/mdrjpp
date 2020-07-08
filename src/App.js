import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";

import F1 from "./F1.js";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/f1">
          <ResetStyles />
          <ThemeProvider theme={themes.default}>
            <div
              style={{
                padding: "3rem",
                background: "teal",
                height: "100vh",
              }}
            >
              <F1 />
            </div>
          </ThemeProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
