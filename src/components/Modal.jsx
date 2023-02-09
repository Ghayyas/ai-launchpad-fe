import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Metamask from '../Assets/metamask.svg';
import WalletConnect from '../Assets/walleticon.svg';
import Close from "@mui/icons-material/Close";
import { IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  borderRadius: "6px",
  bgcolor: 'background.paper',
  border: '2px solid tranparent',
  boxShadow: 24,
  p: "17px 32px 32px 32px",
};

const  ModalWrapper = ({open,setOpen}) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" textAlign={'center'} variant="h3" component="h2">
            <Box display={'flex'} justifyContent="space-between">
            <Typography variant="h3">
            Connect to a Wallet

            </Typography>
            <IconButton onClick={handleClose} type="button" sx={{ p: 1 }}>
          <Close  />
        </IconButton>
            </Box>
           
          </Typography>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box sx={{height:'201px',display:'flex',alignItems:'center'}} display={'flex'} justifyContent="space-around"
          
            >
            <Box textAlign={'center'}>
                <img style={{width:'90px'}} src={Metamask} alt=""/>
                <Typography textAlign={'center'} variant="h3" mt="20px" >
                    Metamask
                </Typography>


            </Box>
            <Box textAlign={'center'}>
                <img style={{width:'90px',height:'60px'}} src={WalletConnect} alt=""/>
                <Typography textAlign={'center'} variant="h3" mt="20px">
                    WalletConnect
                </Typography>
            </Box>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalWrapper