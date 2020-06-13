import React from 'react'
let flexdiv = {
   display : 'flex',
   border :"20px solid black",
   backgroundColor:"white"
  };

let img ={
    height : "350px",
    width :"600px",
    padding :"10px"
} 

let details ={
    padding :"10px",
    alignItems: "center",
    backgroundColor:"#E5E7E9"
}

let btn = {
    padding:"10px",
    backgroundColor:"green",
    color:"white",
    fontSize:"20px"
}

function Hotelcard(props){
    return(
        < div style={{backgroundColor:"black",borderRadius:"15px"}}>
            <div style={flexdiv}>
                <div>
                    <img src={props.data.image} alt="hotel" style={img}/>
                </div>
                <div style={details}>
                    <h2 style={{color:"tomato"}}>{props.data.name}</h2>
                    <p style={{color:"grey"}}>{props.data.categeries}</p>
                    <p style={{color:"grey"}}>Cost per person ₹ {props.data.cost}</p>
                    <h5 >{props.data.payment}</h5>
                    <div>
                       <button  style={btn}>Order Online</button>
                    </div>
                </div>
                <div style={details} >
                    <p style={{backgroundColor:"green",color:"white",borderRadius :"10px",padding :"5px"}}>Rating {props.data.rating}</p>
                    <p style={{color:"grey"}}>{props.data.votes}</p>
                    <p style={{color:"grey"}}>{props.data.reviews}</p>
                </div>
            </div>
        </div>
    )
}

export default Hotelcard