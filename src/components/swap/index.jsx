import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Paper,
    StepContent,
    TextField,
    Typography,
    useTheme,
    Grid,
    Select,
    MenuItem
  } from "@mui/material";
  import React, { useState } from "react";
  import { tokens } from "../../theme";
  import Pairs from "../Pairs";
  import {    makeStyles  } from '@mui/styles';
  import HistoryIcon from '@mui/icons-material/History';
  import TuneIcon from '@mui/icons-material/Tune';
  import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
  import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
  import History from './history';

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '0 auto',
      padding: '10px'
    },
    media: {
      height: 140,
    },
  });




  const Swap = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = useStyles();
   
    const [open, setOpen] = useState(false);
    const [isSwap,setIsSwap] = useState(false);
    const [option1, setOption1] = useState('BNB');
    const [option2, setOption2] = useState('BTCB');

    const options = ["BNB", "BTCB", "BUSD","ETH","PinkE","PinkS","SAFEHOLD"];

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  
  
    return (
      <>
        <Pairs title={"Home"} />
        <Container className="margin">
        <Card className={classes.root}>
        <div className="flex justify-between items-center">
            <p className="bold font-18">Exchange</p>
            <div className="flex">
                <Button><TuneIcon/></Button>
                &nbsp;
                <Button
                  onClick={handleClickOpen}
                ><HistoryIcon/></Button>
            </div>
        </div>
       <History open={open} close={handleClose}/>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            From
          </Typography>
            <div className="flex justify-between items-center">
                <input type="number" className="border-none"/>
                <Button>
                <div className="flex">
                {/* <CurrencyBitcoinIcon/> */}
                &nbsp;
                <Select
                onChange={(e) => setOption1(e.target.value)}
                value={!isSwap ? option1 : option2}
                >
                  {options.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </Select>
              
                </div>
                </Button>
               
            </div>

            <div className="flex justify-between mr-top">
                <div></div>
                <Button onClick={()=> setIsSwap(isSwap => !isSwap)}><ArrowDownwardIcon/></Button>
                <div></div>
            </div>
            <Typography gutterBottom variant="h5" component="h2">
            To
          </Typography>
            <div className="flex justify-between items-center">
            <input type="number" className="border-none"/>

            <Button>
                <div className="flex">
                <Select
                onChange={(e) => setOption2(e.target.value)}
                value={isSwap ? option1 : option2}
                >
                  {options.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </Select>
              
                </div>
                </Button>
            </div>
        </CardContent>
      <CardActions>
        <Button color="primary" variant="contained">
          Unlock Wallet
        </Button>
      </CardActions>
    </Card>
        </Container>
  
   
      </>
    );
  };
  
  export default Swap;
  