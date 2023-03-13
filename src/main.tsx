import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";  
import light from './styles/theme'


// e84540b93410e7b9a5711cc9814026e6
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />

    </ThemeProvider>
    
  </React.StrictMode>
);
