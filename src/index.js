import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import ReactDOM from "react-dom";
import App from "./App";

export default function Provider() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
  document.getElementById("root")
);
