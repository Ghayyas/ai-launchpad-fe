import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ETH from "../Assets/eth.svg";
import BSC from "../Assets/bsc.png";
import Close from "@mui/icons-material/Close";
import { IconButton, Paper, useTheme } from "@mui/material";
import { tokens } from "../theme";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  borderRadius: "6px",
  bgcolor: "background.paper",
  border: "2px solid tranparent",
  boxShadow: 24,
  p: "17px 32px 32px 32px",
};

const NetworkModal = ({ openNetwork, setOpenNetwork, network, setNetwork }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClose = () => setOpenNetwork(false);

  return (
    <div>
      <Modal
        // sx={{width:'700px'}}
        open={openNetwork}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            textAlign={"center"}
            variant="h3"
            component="h2"
          >
            <Box display={"flex"} justifyContent="space-between">
              <Typography variant="h3">Choose Network</Typography>
              <IconButton onClick={handleClose} type="button" sx={{ p: 1 }}>
                <Close />
              </IconButton>
            </Box>
          </Typography>

          <Box id="modal-modal-description" sx={{ mt: 2 ,}}>
            <Box
              sx={{ display: "flex", justifyContent:'space-around', alignItems: "center" }}
            >
              <Box
                textAlign={"center"}
                onClick={() => {
                  setNetwork("Ethereum");
                  handleClose();
                }}
              >
                <Paper
                  sx={{
                    height: "150px",
                    width: "300px",
                    backgroundColor: `${colors.grey[900]} !important`,
                    ":hover":{
                      transition:'all 0.3s ease-out 0s',
                      border:'1px solid blue',
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      transform: "translate(35%, 50%)",
                    }}
                  >
                    <img
                      style={{
                        display: "inline-block",
                        width: "50px",
                        marginLeft: "20px",
                      }}
                      src={ETH}
                      alt="alt"
                    />
                    <Typography textAlign={"start"} variant="h3">
                      Ethereum
                    </Typography>
                  </Box>
                </Paper>
              </Box>

              <Box
                textAlign={"center"}
                onClick={() => {
                  setNetwork("Binance");
                  handleClose();
                }}
              >
                <Paper
                  sx={{
                    height: "150px",
                    width: "300px",
                    backgroundColor: `${colors.grey[900]} !important`,
                    ":hover":{
                      transition:'all 0.3s ease-out 0s',
                      border:'1px solid blue',
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      transform: "translate(35%, 50%)",
                    }}
                  >
                    <img
                      style={{
                        display: "inline-block",
                        width: "50px",
                        marginLeft: "20px",
                      }}
                      src={BSC}
                      alt="BSC"
                    />
                    <Typography textAlign={"start"} variant="h3">
                      Binance (BSC)
                    </Typography>
                  </Box>
                </Paper>
              </Box>
              {/* <Box
                textAlign={"center"}
                onClick={() => {
                  setNetwork("Ethereum");
                  handleClose();
                }}
              >
                <Paper
                  sx={{
                    height: "150px",
                    width: "300px",
                    backgroundColor: `${colors.grey[900]} !important`,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      transform: "translate(35%, 50%)",
                    }}
                  >
                    <img
                      style={{
                        display: "inline-block",
                        width: "50px",
                        marginLeft: "20px",
                      }}
                      src={ETH}
                      alt="alt"
                    />
                    <Typography textAlign={"start"} variant="h3">
                      Ethereum
                    </Typography>
                  </Box>
                </Paper>
              </Box> */}
              {/* <Box
                textAlign={"center"}
                onClick={() => {
                  setNetwork("Ethereum");
                  handleClose();
                }}
              >
                <Paper
                  sx={{
                    height: "150px",
                    width: "300px",
                    backgroundColor: `${colors.grey[900]} !important`,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      transform: "translate(35%, 50%)",
                    }}
                  >
                    <img
                      style={{
                        display: "inline-block",
                        width: "50px",
                        marginLeft: "20px",
                      }}
                      src={ETH}
                      alt="alt"
                    />
                    <Typography textAlign={"start"} variant="h3">
                      Ethereum
                    </Typography>
                  </Box>
                </Paper>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default NetworkModal;
