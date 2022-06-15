import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function AlertDialog({selected}) {
  const [open, setOpen] = React.useState(false);
  const [in_cu,setIn_cu] = React.useState('');
  const [pay_terms,setPay_terms] = React.useState('');


  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const editAll = () => {
    console.log(selected[0])
      axios.get('http://localhost:8080/summa/EditInvoice?sl_no='+selected[0]+'&invoice_currency='+in_cu+'&cust_payment_terms='+pay_terms)
      handleClose()
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit"}
        </DialogTitle>
        <TextField required
        className="box"
          id="filled-required"
          value={in_cu}
          onChange={(e) => setIn_cu(e.target.value)}
          label="Invoice Currency"
          InputLabelProps={{
            color: "warning",
            border: "5px",
            borderColor: "warning",
          }}

          variant="outlined"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField required
        className="box"
        id="filled-required"
        value={pay_terms}
        onChange={(e) => setPay_terms(e.target.value)}
        label="Customer payment terms"
        InputLabelProps={{
          color: "warning",
          border: "5px",
          borderColor: "warning",
        }}

        variant="outlined"
      />
        <DialogActions>
        
<Button   variant="text"  margin="2px" >
  cancel
</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button   variant="contained"  margin="2px" onClick={editAll}>
  Edit 
</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
