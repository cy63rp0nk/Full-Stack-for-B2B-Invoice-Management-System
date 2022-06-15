import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { loadAdvanced } from './Components/Advanced';
import App from './App';
import { useEffect, Component } from 'react';


export default function AdvacedSearch({setRows}) {
  const [open, setOpen] = React.useState(false);
  const [docu_id, setDocu_id] = React.useState('');
  const [invoi_id, setInvoi_id] = React.useState('');
  const [busi_year, setBusi_year] = React.useState('');
  const [custo_num, setCusto_num] = React.useState('');
  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick= () => {
    // loadAdvanced(docu_id)
    //     .then((res) => {
    //       console.log(res.data)
    //       setRows(res.data)
    //     })
    axios.get(`http://localhost:8080/summa/AdvancedSearch?doc_id=${docu_id}`)
    
         .then((res) => {
           console.log(res.data)
           setRows(res.data)
             })
             .catch((err) => {
               console.log(err)
             })
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Advanced Search
      </Button>
      <Dialog

        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Advanced Search"}
        </DialogTitle>
        <TextField required
          className="box"
          id="filled-required"
          label="Document ID"
          value={docu_id}
          onChange={e => setDocu_id(e.target.value)} 
          InputLabelProps={{
            color: "warning",
            border: "5px",
            borderColor: "warning",
          }}

          variant="outlined"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <TextField className="box"
          id="filled-required"
          label="Invoice ID"
          value={invoi_id}
          onChange={e => setInvoi_id(e.target.value)} 
          InputLabelProps={{
            color: "warning",
            border: "5px",
            borderColor: "warning",
          }}

          variant="outlined"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <TextField className="box"
          id="filled-required"
          label="Customer Number"
          value={busi_year}
          onChange={e => setBusi_year(e.target.value)} 
          InputLabelProps={{
            color: "warning",
            border: "5px",
            borderColor: "warning",
          }}

          variant="outlined"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField className="box"
        id="filled-required"
        label="Business Year"
        value={custo_num}
        onChange={e => setCusto_num(e.target.value)} 
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
{/* <Button   variant="contained" onClick={
      useEffect(() => {
        loadAdvanced(docu_id)
          .then((res) => {
            console.log(res.data)
            setRows(res.data)
          })
      }, [docu_id])} margin="2px" >
  Search
</Button> */}
<Button   variant="contained" onClick={handleClick} margin="2px" >
  Search
</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
