import React from 'react';
import Hotelcard from './Hotelcard'
import data from './data.json'

let btnstyle ={
  backgroundColor: "black",
  padding: "5px",
  color: "white",
  fontSize :"17px",
} 

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating : 0,
      payment : "all",
      sort : " "
    }
  }
  
  handlesort = (e) =>{
    if(e.target.textContent  === "Sort Low to High Cost"){
      this.setState({
        sort : "Low"
      })
    }
    else if(e.target.textContent  === "Sort High to Low Cost"){
        this.setState({
          sort : "High"
      })
    }
  }

  rating = (num)=>{
    this.setState({
      rating : num
    })
  }

  payment(e){
    if(e.target.textContent  === "Cash Payments"){
      this.setState({
        payment : "Accepts cash payments"
      })
    }
    else if(e.target.textContent  === "Card Payments"){
      this.setState({
        payment : "Accepts card payments"
      })
    }
    else{
      if(e.target.textContent  === "All Payments"){
        this.setState({
          payment : "all" 
        })
      }
    }
  }


  render() {
    return (
      <>
        <div style={{textAlign:"center"}}>
          <button style={btnstyle} onClick={(e)=>this.handlesort(e)}>Sort Low to High(Cost)</button>
          <button style={btnstyle} onClick={(e)=>this.handlesort(e)}>Sort High to Low(Cost)</button>
          <button style={btnstyle} onClick={()=>this.rating(1)}>Above 1 Star</button>
          <button style={btnstyle} onClick={()=>this.rating(2)}>Above 2 Star</button>
          <button style={btnstyle} onClick={()=>this.rating(3)}>Above 3 Star</button>
          <button style={btnstyle} onClick={()=>this.rating(4)}>Above 4 Star</button>
          <button style={btnstyle} onClick={(e)=>this.payment(e)}>Cash Payments</button>
          <button style={btnstyle} onClick={(e)=>this.payment(e)}>Card Payments</button>
          <button style={btnstyle} onClick={(e)=>this.payment(e)}>All Payments</button>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
            {data
            .filter(ele => {
              if(ele.rating >= this.state.rating ){
                return ele
              }
            })
            .filter(ele =>{
               if(this.state.payment === "all"){
                 return ele
               }
               else if(ele.payment === this.state.payment){
                  return ele
               }
            })
            .sort((a,b)=>{
              if(this.state.sort === "High"){
                return b.cost - a.cost
              }
              else{
                return a.cost - b.cost
              }
            })
            .map(ele => <Hotelcard key={ele.id} data={ele} />)
            }
        </div>
        </>
      )
    }
  }
function Home() {
  return (
    <div>
      <Data />
    </div>
  )
}

export default Home;
