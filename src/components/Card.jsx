import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../Assets/Ai_Launchpad.svg'
import { colors } from '@mui/material';
 
const  BasicCard = ({data,type=''}) => {
  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent="center" >
    {data.map(res => (
      <Card sx={{ 
        maxWidth: 275,
        padding: "40px 32px",
        margin: '10px 10px',
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0 0 1px rgb(0 0 0 / 1%), 0 4px 8px rgb(0 0 0 / 1%), 0 8px 12px rgb(0 0 0 / 1%), 0 12px 16px rgb(0 0 0 / 1%)"
      
      }}>
        <CardContent>
          {type === 'image' && <img src={Logo} alt="" style={{width:'90px',borderRadius:"50%",marginBottom:'20px'}}/>}
            <Typography variant="h2"  sx={{fontWeight:'bold'}}  color="text.secondary" gutterBottom>
            {res.value}
    
    
            </Typography>
            <Typography variant="h5" component="div">
            {res.text}
            </Typography>
          
            {/* <Typography sx={{ mb: 1.5 }} variant="body2">
            
              Total Liquidity Raised
    
    
            </Typography> */}
        </CardContent>
      </Card>
))}

    </Box>

  );
}
export default BasicCard