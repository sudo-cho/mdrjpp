import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Anchor } from "react95";

import F1 from "./F1.js";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <ThemeProvider theme={themes.default}>
      <ResetStyles />
      <div
        style={{
          background: "teal",
          height: "100vh",
          padding: "3em",
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Anchor>
                <Link to="/f1">Formule 1</Link>
              </Anchor>
            </Route>
            <Route path="/f1">
              <F1 />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
