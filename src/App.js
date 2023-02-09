import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import CreateTokens from './components/CreateTokens';
import Presale from './components/presale';
import Swap from './components/swap';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Box } from "@mui/system";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <Box display="flex" flexDirection={"column"} width="100%">
          <div>
            <Topbar setIsSidebar={setIsSidebar} />
          </div>
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create-tokens" element={<CreateTokens/>} />
              <Route path="/presale" element={<Presale/>} />
              <Route path="/swap" element={<Swap/>} />

            </Routes>
          </main>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
