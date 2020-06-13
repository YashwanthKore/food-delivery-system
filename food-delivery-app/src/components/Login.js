import React, { Component } from 'react'


export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div >
                <div className="container my-5 border bg-light">
                    <h1 className="text-center bg-dark text-light">Login Here :</h1>
                    <form >
                       <div>
                            <label>Username : </label>
                            <input name="username" value={this.state.username}  placeholder="Enter Username" onChange = {this.handleChange} className="form-control"></input>
                        
                            <label className="mt-2">Password : </label>
                            <input name="password" type="password"  value={this.state.password}  placeholder="Enter Password" onChange = {this.handleChange} className="form-control"></input>
                       </div>
                    </form>
                    <div className="d-flex justify-content-center">
                        <button onClick ={this.handleSubmit} className="btn btn-primary btn-lg m-2">Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}