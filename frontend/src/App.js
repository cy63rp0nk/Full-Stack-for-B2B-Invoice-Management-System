import logo123 from "./logo123.svg";
import logo1 from "./Group 20399.png";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import RefreshIcon from "@mui/icons-material/Refresh";
import React, { useEffect, useState, Component } from "react";
import BasicDatePicker from "./datepicker";
import BasicDatePicker1 from "./datepicker1";
import BasicDatePicker2 from "./datepicker2";
import BasicDatePicker3 from "./datepicker3";
import BasicDatePicker4 from "./datepicker4";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import AlertDialog from "./edit";
import AlertDelete from "./delete";
import { loadData } from "./Components/List";
import { render } from "react-dom";
import axios from "axios";
import { loadSearchedData } from "./Components/cusNum";
import AdvancedSearch from "./AdvanceSearch";
import { DialogActions } from "@mui/material";
import { Dialog } from "@mui/material";

import DialogTitle from "@mui/material/DialogTitle";
import { loadAdvanced } from "./Components/Advanced";

<meta name="viewport" content="width=device-width, user-scalable=no"></meta>;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { field: "sl_no", headerName: "Serial", width: 70 },
  { field: "business_code", headerName: "Business Code", width: 110 },
  { field: "cust_number", headerName: "Customer Number", width: 130 },
  { field: "clear_date", headerName: "Clearance Date", width: 110 },
  { field: "buisness_year", headerName: "Business Year", width: 110 },
  { field: "doc_id", headerName: "Document Id", width: 110 },
  { field: "posting_date", headerName: "Post Date", width: 110 },
  {
    field: "document_create_date",
    headerName: "Document Create Date",
    width: 140,
  },
  { field: "due_in_date", headerName: "Due Date", width: 110 },
  { field: "invoice_currency", headerName: "Invoice Currency", width: 130 },
  { field: "document_type", headerName: "Document Type", width: 110 },
  { field: "posting_id", headerName: "Posting ID", width: 1 },
  { field: "total_open_amount", headerName: "Open Amount", width: 110 },
  {
    field: "baseline_create_date",
    headerName: "Baseline Create Date",
    width: 130,
  },
  { field: "cust_payment_terms", headerName: "Payment Terms", width: 110 },
  { field: "invoice_id", headerName: "Invoice ID", width: 110 },
  { field: "aging_bucket", headerName: "Aging Bucket", width: 110 },
];

export default function App() {
  const [open1, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [customer_number, setCustomer_number] = useState("");
  const [b_c, setB_c] = React.useState("");
  const [c_d, setC_d] = React.useState("");
  const [p_d, setP_d] = React.useState("");
  const [d_c_d, setD_c_d] = React.useState("");
  const [d_d, setD_d] = React.useState("");
  const [i_c, setI_c] = React.useState("");
  const [d_t, setD_t] = React.useState("");
  const [p_i, setP_i] = React.useState("");
  const [t_o_a, setT_o_a] = React.useState("");
  const [b_c_d, setB_c_d] = React.useState("");
  const [c_p_t, setC_p_t] = React.useState("");
  const [d_i, setD_i] = React.useState("");
  const [i_i, setI_i] = React.useState("");
  const [b_y, setB_y] = React.useState("");
  const [c_n, setC_n] = React.useState("");
  
  const [selected, setSelected] = React.useState([]);

  useEffect(() => {
    loadData(page).then((res) => {
      console.log(res.data);
      setRows(res.data);
    });
  }, [page]); // added page as dependency here by cy63rpunk04
  

  const handleClo = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    axios.get('http://localhost:8080/summa/AddInvoice?business_code='+b_c+'&cust_number='+c_n+'&business_year='+b_y+'&doc_id='+d_i+'&invoice_currency='+i_c+'&documet_type='+d_t+'&posting_id='+p_i+'&total_open_amount='+t_o_a+'&cust_payment_terms='+c_p_t+'&invoice_id='+i_i)
    //axios.get('http://localhost:8080/summa/AddInvoice?business_code='+b_c+'&cust_number='+c_n+'&clear_date='+c_d+'&business_year='+b_y+'&doc_id='+d_i+'&posting_date='+p_d+'&document_create_date'+d_c_d+'&due_in_date='+d_d+'&invoice_currency='+i_c+'&documet_type='+d_t+'&posting_id='+p_i+'&total_open_amount='+t_o_a+'&baseline_create_date='+b_c_d+'&cust_payment_terms='+c_p_t+'&invoice_id='+i_i)
    handleClo()
  }
  const handleAdd1 = () => {
    axios.get('http://localhost:8080/summa/AddInvoice')
    handleClo()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const handleClose1 = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  //this.handleKeyPress=this.handleKeyPress.bind(this);
  //const handleKeyPress = (event) => {

  //if(event.key === 'Enter'){
  //console.log(customer_number)
  //axios.get('http://localhost:8080/summa/SearchInvoice?cust_id='+customer_number)
  //}
  //}

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl1);
  const id = open ? "simple-popover" : undefined;
  const id3 = open2 ? "simple-popover" : undefined;
  const id2 = open1 ? "dddd" : undefined;

  return (
    <div className="App">
      <div className="sec1">
        <img
          className="logomain1"
          src={logo1}
          size="small"
          heigh="12px"
          width="200px"
          colour="#37474F"
        />
        <img
          className="logomain"
          src={logo123}
          size="small"
          heigh="10px"
          width="200px"
          colour="#37474F"
        />
        <br />
        <p className="invoice" size="25px">
          Invoice List
        </p>
        <br />
      </div>

      <div className="click1">
        <Button variant="contained" margin="2px">
          Predict
        </Button>
        <Button variant="contained" margin="2px">
          Analytic
        </Button>
        <Button>
          <AdvancedSearch setRows={setRows} />
        </Button>
        &nbsp;&nbsp;
        <IconButton aria-label="refresh" color="primary">
          <RefreshIcon
            onClick={refreshPage}
          />
        </IconButton>
        &nbsp;&nbsp;&nbsp;
        <TextField
          value={customer_number}
          onKeyPress={useEffect(() => {
            loadSearchedData(customer_number).then((res) => {
              console.log(res.data);
              setRows(res.data);
            });
          }, [customer_number])}
          onChange={(e) => setCustomer_number(e.target.value)}
          startIcon={<SearchIcon />}
          inputProps={{
            startadornment: (
              <TextField position="start">
                <SearchIcon />
              </TextField>
            ),
          }}
          id="filled-basic"
          placeholder="Search Customer Id"
          variant="filled"
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          aria-describedby={id}
          onClick={handleClick}
          variant="contained"
          margin="2px"
        >
          ADD
        </Button>
        &nbsp;&nbsp;
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="popbox">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="outlined-basic"
              label="Business Code"
              value={b_c}
              onChange={(e) => setB_c(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required1"
              label="Customer Number"
              value={c_n}
              onChange={(e) => setC_n(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BasicDatePicker
              className="box"
              id="filled-required"
              label="Clear date"
              value={c_d}
              onChange={(e) => setC_d(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="outlined-basic"
              label="Business year"
              value={b_y}
              onChange={(e) => setB_y(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              required
              className="box"
              id="outlined-basic"
              label="Document ID"
              value={d_i}
              onChange={(e) => setD_i(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BasicDatePicker1
              className="box"
              id="filled-required"
              label="Posting Date"
              value={p_d}
              onChange={(e) => setP_d(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BasicDatePicker2
              className="box"
              id="filled-required"
              label="Document create date"
              value={d_c_d}
              onChange={(e) => setD_c_d(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BasicDatePicker3
              className="box"
              id="filled-required"
              label="Due Date"
              value={d_d}
              onChange={(e) => setD_d(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required"
              label="Invoice Currency"
              value={i_c}
              onChange={(e) => setI_c(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required"
              label="Document type"
              value={d_t}
              onChange={(e) => setD_t(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required"
              label="Posting id"
              value={p_i}
              onChange={(e) => setP_i(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required"
              label="Total open amount"
              value={t_o_a}
              onChange={(e) => setT_o_a(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BasicDatePicker4
              placeholder=" Date"
              className="box"
              id="filled-required"
              label="Document Id"
              value={b_c_d}
              onChange={(e) => setB_c_d(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required"
              label="Customer Payment Terms"
              value={c_p_t}
              onChange={(e) => setC_p_t(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              className="box"
              id="filled-required"
              label="Invoice Id"
              value={i_i}
              onChange={(e) => setI_i(e.target.value)}
              InputLabelProps={{
                color: "warning",
                border: "5px",
                borderColor: "warning",
              }}
              variant="outlined"
            />
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className="poptext" variant="contained" onClick={handleAdd}>
              ADD
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="text">Cancel</Button>&nbsp;&nbsp;&nbsp;
          </div>
        </Popover>
        <Button variant="contained" disabled={!(selected.length == 1)}>
          <AlertDialog selected={selected} />
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" disabled={!(selected.length > 0)}>
          <AlertDelete selected={selected} />
        </Button>
        &nbsp;&nbsp;&nbsp;
      </div>

      <div className="table">
        <DataGrid
          style={{ height: 769, width: "100%", color: "#ffffff" }}
          rows={rows}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            // const selectedRowData = rows.filter((row) =>
            //   selectedIDs.has(row.id.toString());
            // );
            setSelected([...selectedIDs]);
          }}
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[12]}
          getRowId={(row) => row.sl_no}
          checkboxSelection
        />
      </div>
      <p className="policy">
        <button className="button1">Privacy policy</button>|©2022 Highradius
        Corporation . All Right Reserved{" "}
      </p>
    </div>
  );
}
