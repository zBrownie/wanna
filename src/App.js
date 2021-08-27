import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import ThemeSelector from "./styles/theme";
import 'antd/dist/antd.css';
function App() {
  return (
    <ThemeProvider theme={ThemeSelector("")}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
