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



const Step3 = () => {

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
            <Typography
          sx={{ width: "100%"}}
          style={{ color: 'red', marginTop: "5px" }}>
            (*) is a required filed
          </Typography>

       
      
     
    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              Logo URL<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>

        <p className="danger">Logo cannot be blank</p>
        <p className="primary">
        URL must end with a supported image extension png, jpg, jpeg or gif. 
        You can upload your image at https://upload.pinksale.finance/
        </p>

      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
              Website<sup className="danger">*</sup>
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
          <p className="danger">Website cannot be blank</p>

        </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
            Facebook
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
            Twitter
          </Typography>
          </FormLabel>
          <TextField variant="outlined" />
        </FormControl>
      </Grid>
    </Grid>
   

     <br/>
    <Grid container spacing={2}>
      <Grid item  xs={12}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              Github
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
            Telegram
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
          Instagram
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
        </FormControl>
      </Grid>
    </Grid>


    <Grid container spacing={2}>
      <Grid item  xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
            Discord
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />

        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>
          <Typography sx={{fontWeight:'bold'}}>
          Reddit
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
        </FormControl>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item  xs={12}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
              Youtube Video
            </Typography>
          </FormLabel>
          <TextField variant="outlined" />
        </FormControl>
        <p className="primary">
           Input your youtube URL, or youtube video ID.
        </p>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item  xs={12}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography sx={{fontWeight:'bold'}}>
            Description
            </Typography>
          </FormLabel>
      <TextareaAutosize
        placeholder="Ex: This is the best project"
        minRows={8}
      />
    </FormControl>
       
      </Grid>
    </Grid>
      </div>
                
          </Card>
         
        
        </Container>
    
    </>
 )
}

export default Step3;