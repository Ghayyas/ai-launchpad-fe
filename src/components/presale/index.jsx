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
import { tokens } from "../../theme";
import Pairs from "../Pairs";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormControl, FormControlLabel, Radio,RadioGroup,FormLabel } from "@mui/material";

import Step3 from './steps/step3';
import Step4 from './steps/step4';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const steps = [{label:'Before you start', 
description:"Input your awesome title and choose the currency"}, 
{label:'Private Sale', description:"Enter the launchpad information that you want to raise , that should be enter all details about your presale"}, 
{label:'Add Additional Info', description:"Let people know who you are"},
{label:'Finish', description:"Review your information"}];


const Presale = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeStep, setActiveStep] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [skipped, setSkipped] = React.useState(new Set());
  const [selectedValue, setSelectedValue] = React.useState("ETH");
  const [value, setValue] = React.useState("enabled");
  const [selectedDate, setSelectedDate] = React.useState(new Date());



  const handleChangeEnable = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if(activeStep === steps.length - 1) return;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };




  return (
    <>
      <Pairs title={"Home"} />
      <Container>
      <Box sx={{height:"70px", padding:"28px"}}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
         
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
              <p>{step.description}</p>
            </Step>
          );
        })}
      </Stepper>
      </Box>
      </Container>



      {
        activeStep == 0 &&
        
          <Container>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              m: "40px 30px",
            }}
          >
            <TextField
              sx={{ width: "100%", margin: "20px", marginRight: "200px" }}
              id="filled-basic"
              label="Title"
              variant="filled"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {!title && (
          <Typography
          sx={{ width: "100%", margin: "20px" }}
          style={{ color: 'red', marginTop: "-15px" }}>
            Title is a required filed
          </Typography>
        )}
        <Typography
          sx={{ width: "100%", margin: "20px",}}
          style={{ color: 'blue', marginTop: "-15px" }}>
            Pool Creation fee: 0.2 ETH
          </Typography>
  
  
          <Typography
          sx={{ width: "100%", margin: "20px" }}
          style={{ color: 'black', fontWeight:"bold", fontSize:'18px' , marginTop: "5px" }}>
            Currency
          </Typography>
  
        <FormControl
                sx={{ width: "100%", marginLeft: "20px",}}
        component="fieldset">
        <FormControlLabel
          value="ETH"
          control={<Radio checked={selectedValue === "ETH"} onChange={handleChange} />}
          label="ETH"
        />
        <FormControlLabel
          value="USDT"
          control={<Radio checked={selectedValue === "USDT"} onChange={handleChange} />}
          label="USDT"
        />
        <FormControlLabel
          value="USDC"
          control={<Radio checked={selectedValue === "USDC"} onChange={handleChange} />}
          label="USDC"
        />
      </FormControl>
           <Typography
          sx={{ width: "100%", margin: "20px" }}
          style={{ color: 'blue' , marginTop: "-5px" }}>
            Users will pay ETH for your token
          </Typography>
          </Card>
         
        
        </Container>
        
      }


{
        activeStep == 1 &&
        
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
            <Typography
          sx={{ width: "100%"}}
          style={{ color: 'red', marginTop: "5px" }}>
            (*) is a required filed
          </Typography>
          <Typography
          sx={{ width: "100%"}}
          style={{ fontWeight:"bold",}}>
            Whitelist
          </Typography>

        <RadioGroup row value={value} onChange={handleChangeEnable}>
        <FormControlLabel
          value="enabled"
          control={<Radio />}
          label="Enabled"
        />
        <FormControlLabel
          value="disabled"
          control={<Radio />}
          label="Disabled"
        />
      </RadioGroup>
      
      <Typography
          sx={{ width: "100%"}}
          style={{ color: 'blue'}}>
            You can enable/disabled whitelist anytime
          </Typography>
      
         
    <br/>
    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              Softcap (ETH)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>

        <p className="danger">Softcap must be positive number</p>
        <p className="primary">Softcap must be &gt;= 50% of Hardcap!</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
              HardCap (ETH)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
          <p className="danger">Hardcap must be positive number</p>

        </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              Minimum buy (ETH)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>

        <p className="danger">Minimum must be positive number</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
              Maximum buy (ETH)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
          <p className="danger">Maximum must be positive number</p>
        </FormControl>
      </Grid>
    </Grid>
    <Typography sx={{fontWeight:'bold'}}>
              Select start time &amp; end time (UTC)<sup className="danger">*</sup>
    </Typography>
    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          
            <Typography sx={{fontWeight:'bold'}}>
               Start time (UTC)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={selectedDate}
                          onChange={(newValue) => {
                            setSelectedDate(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>

        </FormControl>

      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
               End time (UTC)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </FormControl>
      </Grid>
    </Grid>

     <br/>
    <Grid container spacing={2}>
      <Grid item  xs={12}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              First Fund Release For Project (%)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>

        <p className="danger">First release fund cannot be blank</p>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              Fund Vesting Period Each Cycle (days)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>

        <p className="danger">Vesting period each cycle cannot be blank</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
          Fund Release Each Cycle (percent)<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
          <p className="danger">Cycle Release Percent cannot be blank</p>
        </FormControl>
      </Grid>
    </Grid>
      </div>
                
          </Card>
         
        
        </Container>
        
      }

      {activeStep == 2 && 
      
        <Step3 />
      }


   {activeStep == 3 && 
      
      <Step4 />
    }



    
      <Box sx={{ display: 'flex', flexDirection: 'row',alignItems:'center', justifyContent:'center' }} textAlign={"center"} m={5}>
           <Button onClick={handleBack} 
             disabled={activeStep === 0} 
             variant="contained">
               Back
            </Button>
            &nbsp;
            <Button onClick={handleNext} disabled={!title} variant="contained">
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
      <Container>
        <Box sx={{display:'flex', justifyContent:'center', paddingBottom:"10px"}}>
          <Typography textAlign={'center'} variant="body1">
            Disclaimer: The information provided shall not in any way constitute
            a recommendation as to whether you should invest in any product
            discussed. We accept no liability for any loss occasioned to any
            person acting or refraining from action as a result of any material
            provided or published.
          </Typography>
        </Box>
      </Container>
 
    </>
  );
};

export default Presale;
