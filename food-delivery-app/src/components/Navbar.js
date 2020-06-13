import React from 'react';
import './Headerstyle.css';
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className="Headerstyle">
            <ul>
               <li><Link to ="/"> Home </Link></li>
               <li><Link to ="/Contact"> Contact </Link></li>
               <li><Link to ="/About"> About </Link></li>
               <li><Link to ="/Services"> Services </Link></li>
               <li><Link to ="/Login"> Login </Link></li>
            </ul>
        </div>
    )
}

export default Navbar