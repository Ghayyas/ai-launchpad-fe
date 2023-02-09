
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {
    Button
  } from "@mui/material";
const History = ({open,close}) => {

    return(

    <Dialog
    open={open}
    onClose={close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
        <div className="flex justify-between">
        <b>Recent transaction</b>
        <Button onClick={close}>
            <CloseIcon/>
        </Button>
        </div>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Please connect your wallet to view your recent transaction
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={close}>Close</Button>
    
    </DialogActions>
  </Dialog>
    )
}

export default History