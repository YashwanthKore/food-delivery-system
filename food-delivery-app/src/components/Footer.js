import React from 'react';
import './Footerstyle.css';
import 'font-awesome/css/font-awesome.min.css'

function Footer(){
    return(
        <div className="Footerstyle">
            <div style={{display:"grid" ,gridTemplateColumns:"100px 100px 100px 100px 100px" ,justifyContent: "center", padding :"50px"}}>
                <a href ="https://www.facebook.com"><i className="fa fa-facebook" style={{fontSize:"30px",color:"grey"}}></i> </a>
                <a href ="https://www.youtube.com"><i className="fa fa-youtube" style={{fontSize:"30px",color:"grey"}}></i> </a>
                <a href ="https://www.instagram.com"><i className="fa fa-instagram" style={{fontSize:"30px",color:"grey"}}></i> </a>
                <a href ="https://www.twitter.com"><i className="fa fa-twitter" style={{fontSize:"30px" ,color:"grey"}}></i> </a>
                <a href ="https://www.linkedin.com"><i className="fa fa-linkedin" style={{fontSize:"30px" ,color:"grey"}}></i> </a>
            </div>
            <div style={{textAlign:"center"}}>
                <p>@ Copyright Foodbuzz 2020 <br/> All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer