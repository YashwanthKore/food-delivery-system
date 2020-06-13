import React from 'react'
let logostyle = {
  backgroundColor:"black",
  color:"white",
  height:"50px",
  fontSize:"35px",
  paddingBottom:"50px"
}
function Logo(){
    return(
      <div>
        <div style={logostyle}>
          <h1 style={{textShadow: "5px 5px 5px lightgreen"}}>Food Buzz</h1>
        </div>
        <hr/>
      </div>
    )
}
export default Logo