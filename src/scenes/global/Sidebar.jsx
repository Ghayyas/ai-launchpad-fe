import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Swap from "@mui/icons-material/SwapHorizTwoTone";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../../Assets/Ai_Launchpad.svg'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{fontSize:'20px'}}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({isCollapsed,setIsCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    
      sx={{
        // display: { xs: 'none', sm: 'block' },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          top:'100px'
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          {/* <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem> */}

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="140px"
                  height="140px"
                  src={logo}
                  style={{ cursor: "pointer", borderRadius: "50%", objectFit: "contain" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ai LaunchPad
                </Typography>
              
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
              title=" Home "
              to="/"
              icon={<HomeOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=" Swap "
              to="/swap"
              icon={<Swap fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
          
            >
       
            </Typography>
            <Item
              title="Cross chain "
              to="#"
              icon={<PeopleOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Stake"
              to="#"
              icon={<ContactsOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Presale"
              to="/presale"
              icon={<ReceiptOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              
            >
         
            </Typography>
            <Item
              title="Create token"
              to="/create-tokens"
              icon={<PersonOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Spatial sale"
              to="#"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="Locker"
              to="#"
              icon={<HelpOutlineOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
             
            >
            
            </Typography>
            <Item
              title="Antibot"
              to="#"
              icon={<BarChartOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=" Kyc& audited"
              to="#"
              icon={<PieChartOutlineOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Presale alert"
              to="#"
              icon={<TimelineOutlinedIcon fontSize="large" />}
              selected={selected}
              setSelected={setSelected}
            />
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
