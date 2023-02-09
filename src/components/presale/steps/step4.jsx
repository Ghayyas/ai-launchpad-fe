
import {
    Box,
    Button,
    Card,
    Container,
    Paper,
    StepContent,
    TextField,
    Typography,
    useTheme,
    Grid
  } from "@mui/material";
  import React from "react";
  import { FormControl, FormControlLabel, Radio,RadioGroup,FormLabel,TextareaAutosize } from "@mui/material";

//   import Textarea from '@mui/joy/Textarea';



const Step4 = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [skipped, setSkipped] = React.useState(new Set());
    const [selectedValue, setSelectedValue] = React.useState("ETH");
    const [value, setValue] = React.useState("enabled");
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const handleChangeEnable = (event) => {
        setValue(event.target.value);
      };
    
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };


  var arr = [
    {title:"Title", value:"title",color:'pink'},
    {title:"Sale method", value:"Whitelist Only"},
    {title:"SoftCap", value:"4 ETH"},
    {title:"Hardcap", value:"4 ETH"},
    {title:"Minimum buy", value:"5 ETH"},
    {title:"Maximum buy", value:"30 ETH"},
    {title:"Fund TGE", value:"2%"},
    {title:"Fund Cycle", value:"3 Days"},
    {title:"Fund Release Each Cycle", value:"4%"},
    {title:"Start time", value:"2023-02-03"},
    {title:"End time", value:"2023-02-03"},
    {title:"Website", value:"https://www.google.com", color:'pink'}



];






return(
    <>
    <Container>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              m: "40px 30px",
            }}
          >
          <div className="margin">
          

       
      
     {
        arr.map((val,index)=>{
            return(
                <Grid container spacing={2}>
                <Grid item  xs={12} md={6}>
                  
                      <Typography sx={{fontWeight:'bold'}}>
                        {val.title}
                      </Typography>
                    
          
          
                </Grid>
                <Grid item xs={12} md={6}>
                 
                    <Typography sx={{color: (val.color == 'pink') ? 'red': 'blue'}}>
                        {val.value}
                      </Typography>
                   
                </Grid>
              </Grid>
            )
        })
     }
   

     <div className="warning-msg">
        <p>
        For tokens with burns, rebase or other special transfers please ensure that you have a way to exclude rewards, dividens, max tx amount for whitelisted addresses
        </p>
     </div>
   
      </div>
                
    </Card>
         
        
        </Container>
    
    </>
 )
}

export default Step4;