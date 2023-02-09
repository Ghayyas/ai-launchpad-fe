import {
  Box,
  Button,
  Card,
  Container,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Pairs from "../Pairs";

const CreateTokens = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Pairs title={"Home"} />
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
            label="Token Type"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%", margin: "20px" }}
            id="filled-basic"
            label="Name"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%", margin: "20px" }}
            id="filled-basic"
            label="Symbol"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%", margin: "20px" }}
            id="filled-basic"
            label="Decimals"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%", margin: "20px" }}
            id="filled-basic"
            label="Total supply"
            variant="filled"
          />
          <Box textAlign={"center"} m={5}>
            <Button variant="contained">Create token</Button>
          </Box>
        </Card>
      </Container>

      <Container>
        <Box sx={{display:'flex', justifyContent:'center'}}>
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

export default CreateTokens;
