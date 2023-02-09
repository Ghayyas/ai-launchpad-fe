import { Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";
import Pairs from "../../components/Pairs";
import { tokens } from "../../theme";
import Card from "../../components/Card";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const factsData = [
    {
      value: '$10.4M',
      text: 'Total Liquidity Raised'
    },
    {
      value: '-',
      text: 'Total Projects'
    }, {
      value: '-',
      text: 'Total Participants'
    }, {
      value: '$16.1M',
      text: 'Total Values Locked'
    },
  ]
  const data2 = [
    {
      value: 'Standard',
      text: 'Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.'
    },
    {
      value: 'Deflationary',
      text: 'Generate deflationary tokens with tax and/or charity functions.'
    }, {
      value: 'Customization',
      text: 'Create a token sale for your own custom token easily.'
    }, {
      value: 'Launchpad',
      text: 'Use the token you mint to create a launchpad with just a few clicks'
    },
    {
      value: 'Branding',
      text: 'Adding logo, social links, description, listing on AISale'
    },
    {
      value: 'Management',
      text: 'The portal to help you easily update content for your launchpad.'
    }
  ]
  const data3 = [
    {
      value: 'AIMoon',
      text: 'The best launchpad for professional teams'
    },
    {
      value: 'AISale',
      text: 'Launch a token sale with a few clicks.'
    }, {
      value: 'AISwap',
      text: 'Swap tokens and farming $AIS.'
    }, {
      value: 'AILock',
      text: 'Locking liquidity on AISwap.'
    },
    {
      value: 'AIElon',
      text: 'The first meme token on AIMoon.'
    },
    {
      value: 'AIWallet',
      text: 'Crypto wallet, buy, store, exchange & earn..'
    }
  ]
  return (
   <>
    <Pairs title={'Home'}/>
    <Container>
    <Box m="20px 30px" textAlign={'center'}>
      <Typography
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "100px 0 20px 0" }}
        p="0 10px"
        variant="h2">
          The Launchpad Protocol for Everyone!
      </Typography>
      <Typography
        color={colors.grey[100]}
         sx={{ m: "0 0 5px 0" }}
        p="0 10px"
        variant="h5"
        component={'div'}>
         AISale helps everyone to create their own tokens and token sales in few seconds.



      </Typography>
      <Typography
        color={colors.grey[100]}
         variant="h5"
        sx={{ m: "0 0 5px 0" }}
        p="0 10px"
        component={'div'}>
          Tokens created on AISale will be verified and published on explorer websites.


      </Typography>
    
    </Box>

    <Box>
      <Card data={factsData}/>
    </Box>



    <Box mb="30px" textAlign={'center'}>
      <Typography
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "100px 0 20px 0" }}
        p="0 10px"
        variant="h2">
        A Suite of Tools for Token Sales.

      </Typography>
      <Typography
        color={colors.grey[100]}
         sx={{ m: "0 0 5px 0" }}
        p="0 10px"
        variant="h5"
        component={'div'}>
A suite of tools were built to help you create your own tokens and launchpads in a fast, simple <br/> and cheap way, with no prior code knowledge required and 100% decentralized!


      </Typography>
 
    
    </Box>

    <Box>
      <Card data={data2} type="image"/>
    </Box>


    <Box mb="30px" textAlign={'center'}>
      <Typography
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "100px 0 20px 0" }}
        p="0 10px"
        variant="h2">
        A Growing Protocol Ecosystem.


      </Typography>
      <Typography
        color={colors.grey[100]}
         sx={{ m: "0 0 5px 0" }}
        p="0 10px"
        variant="h5"
        component={'div'}>
We build a suite of tools for the world of decentralized finance. AIMoon, AISale, AIElon <br/> AILock, AISwap, we AI everything!

      </Typography>
 
    
    </Box>

    <Box sx={{mb:'30px'}}>
      <Card data={data3} type="image"/>
    </Box>

    </Container>

   </>
  );
};

export default Dashboard;
