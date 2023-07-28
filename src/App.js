import React from "react";
import Sidedrawer from "./components/SideDrawer/Sidedrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Layout from "./components/Layout/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
