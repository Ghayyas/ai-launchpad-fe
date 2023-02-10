import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import CreateTokens from './components/CreateTokens';
import Presale from './components/presale';
import Swap from './components/swap';
import { tokens } from "./theme";

import { CssBaseline, ThemeProvider,IconButton } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Box } from "@mui/system";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div  className={isCollapsed ? "menu-btn-1" : 'menu-btn-2'}>
          <div className="menu-btn">
          <IconButton  style={{
              color: colors.grey[100],
            }}
             onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlinedIcon />
        </IconButton>
          </div>
          </div>
        <Sidebar isSidebar={isSidebar} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

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
