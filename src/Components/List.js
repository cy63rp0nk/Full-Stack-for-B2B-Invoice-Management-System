import React from 'react';
import axios from 'axios';

export const loadData = async (page) => {
    let res = await axios.get(`http://localhost:8080/summa/DataRetrieval?page=${page}`)
    return res;
};



/*export default class List extends React.Component{
    state={
        customers: [],
    };
    componentDidMount(){
        axios.get('http://localhost:8080/highradius_hrc81993/DataRetrieval').then(res => {
        console.log(res);
        this.setState({customers:res.data});
        });
    }
        render(){
            return 
        }
    }*/
    