
import React, { Component } from "react";
import axios from 'axios'
import qs from 'qs'

const baseUrl = `http://localhost:5000/sign-in/auth`

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        
        //const data = qs.stringify({
        //     email: this.state.email
        //})

        const data = JSON.stringify({ "email": this.state.email });

        var config = {
            method: 'post',
            url: baseUrl,
            headers: {
                'Api-Token': data.length, 
                'Content-Type': 'application/json',
                "Content-Length": data.length
            },
            data: data
          };

        console.log("config.data.email " + config.data.email)
        console.log("config.url " + config.url)
        console.log(axios(config))

        const api = async () =>{
            try {
                const resp = 
                    await axios(config)
                        .then(res => {
                            console.log("axios res " + res);
                        })
            } catch (error) {                
                console.log("axios error response")
                console.log(error.response)
            }
        }
        api()
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