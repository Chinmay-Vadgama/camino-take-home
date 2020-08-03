/**
 * @description
 */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import React from 'react'
const SuccessAlert = (props) => {
    const [open, setOpen] = React.useState(true);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = async () => {
        await setOpen(false);
        props.step()
      };
    return (
        <div>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Success Message"}</DialogTitle>
                <DialogContent> 
                <DialogContentText id="alert-dialog-description">
                    {props.message}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                
                <Button onClick={handleClose} color="primary" autoFocus>
                    OK
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SuccessAlert

