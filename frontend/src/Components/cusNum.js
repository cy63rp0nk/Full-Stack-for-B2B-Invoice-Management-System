/*import React, { Component } from 'react';
import App from '../App.js';

class Cus_num extends Component {
    constructor(props){
    this.state = { customer_num:null }; 
    this.handleKeyPress=this.handleKeyPress.bind(this)
    
    }
    handleKeyPress(){
        this.setState((e) => ({
                customer_num:{customer_number} 
        }));
        
    }
    render() { 
        return ();
    }
}
 
export default Cus_num;*/
import React from 'react';
import axios from 'axios';

export const loadSearchedData = async (customer_number) => {
    let res = await axios.get(`http://localhost:8080/summa/SearchInvoice?cust_id=${customer_number}`)
    return res;
};