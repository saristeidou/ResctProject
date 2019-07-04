import React, { Component } from 'react'

class Signup extends Component {
    state ={
        email: '',
        password: '',
        repassword: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                   <h5 className="grey-text text-darken-3">Sign In</h5>
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="repassword" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field center">
                       <button className="btn pink lighten-1 z-depth-0">Create Account</button>
                   </div>
               </form>
            </div>
        )
    }
}

export default Signup
