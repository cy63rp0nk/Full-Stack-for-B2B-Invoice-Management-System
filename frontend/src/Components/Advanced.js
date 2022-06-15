import React from 'react';
import axios from 'axios';

export const loadAdvanced = async (do_id) => {
    let res = await axios.get(`http://localhost:8080/summa/AdvancedSearch?doc_id=${do_id}`)
    return res;
};