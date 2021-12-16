import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import MainLayout from "./pages/MainLayout";

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
