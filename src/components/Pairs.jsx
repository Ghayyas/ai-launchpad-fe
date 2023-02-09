import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Pairs = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const pairs = [
    {
      name: 'MusicAI'
    },
    {
      name: 'NueralAI'
    },
    {
      name: 'Sugar'
    },
    {
      name: 'Res'
    },
    {
      name: 'AlonMars'
    },
    {
      name: 'BtcWeb3'
    }
  ]
  return (
    <Box mb="0" display={"flex"} sx={{padding: "10px",background: `${colors.primary[900]} !important`,}}>
      <Typography 
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", color:`${colors.grey[100]} !important` }}
        p="0 10px"
        variant="h5"
      >
          Trending
      </Typography>
      {pairs.map((res,ind) => (
        <Typography 
        color={colors.grey[100]}
        sx={{ m: "0 0 5px 0" }}
        p="0 10px"
        variant="h5">
        {`#${ind+1}`}    {res.name}
      </Typography>
      ))}
    </Box>
  );
};

export default Pairs;
