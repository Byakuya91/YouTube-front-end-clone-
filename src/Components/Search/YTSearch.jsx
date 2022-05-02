import axios from "axios";
import React, { useState, useEffect } from 'react';
import {API_KEY_ONE} from "../../API_KEYS";


// console.log(API_KEY_ONE);

// A UseEffect that is linked to the button.   


const YTSearch = (props) => {
    return (

        <input type= "text" placeholder="Enter search" onChange={(event) => props.handleYTSearch(event.target.value)}  ></input>
    ); 
        
}
    
export default YTSearch;