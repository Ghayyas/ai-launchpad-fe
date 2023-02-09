import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ModalWrapper from "../../components/Modal";
import NetworkModal from "../../components/NetworkModal";
import ETH from '../../Assets/eth.svg';
import BSC from '../../Assets/bsc.png';
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [network, setNetwork] = useState('Ethereum');

  const [openNetwork, setOpenNetwork] = useState(false);
  const handleOpenNetwork = () => setOpenNetwork(true);
  console.log(network)
   return (
    <Box sx={{display:'flex', justifyContent:'flex-end', backgroundColor:colors.primary[400]}} p={2}>
      {/* SEARCH BAR */}
      {/* <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}

      {/* ICONS */}
      <Box sx={{display:'flex '}}>
        <IconButton onClick={colorMode.toggleColorMode}
              sx={{ m: "0 10px 0 0" }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
          <Button sx={{backgroundColor:colors.primary[400], color:colors.primary[100], marginRight:'10px'}}  onClick={handleOpenNetwork}>
        <img style={{width:'20px',height:'20px', marginRight:'2px'}} src={network === 'Ethereum' ? ETH : BSC} alt=""/> 
          {network}
          </Button>
          <NetworkModal setNetwork={setNetwork} openNetwork={openNetwork} setOpenNetwork={setOpenNetwork}/>

          <Button sx={{backgroundColor:colors.primary[400], color:colors.primary[100], marginRight:'10px'}} onClick={handleOpen}> Connect Wallet</Button>
          <ModalWrapper open={open} setOpen={setOpen}/>
        
      </Box>
    </Box>
  );
};

export default Topbar;
