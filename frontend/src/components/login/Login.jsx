
import React, { Component } from "react";
import axios from 'axios'

const baseUrl = 'http://localhost:5000/sign-in/auth'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const e = {
            email : this.state.email
        }

        var x = JSON.stringify(e);
        console.log(x)

        var config = {
            method: 'get',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : x
          };

        axios.get(`${baseUrl}`, [config])
        .then(res => {
          console.log(res);
        })         
    }

    updateField(event){
        this.setState({email : event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={e => this.updateField(e)} className="form-control" placeholder="Enter email" />
                </div>

                <button className="btn btn-primary btn-block" type="submit">Submit</button>
            </form>
        );
    }
}