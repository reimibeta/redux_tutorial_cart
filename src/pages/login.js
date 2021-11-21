import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        axios.post('http://p.pcrpallet.com/api/users/user_token/', {'name': 'reimi', 'password': 'iwtdstw'}).then(res => {
            // const token = res.data.token;
            // localStorage.setItem('jwtToken', token);
            console.log("token: ", res);
        });
        event.preventDefault();
      }

    render(){
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                {/* <label>
                    Name:
                    <input type="text" name="name" value="reimi" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value="iwtdstw" />
                </label> */}
                <input type="submit" value="Submit" />
                </form>
            </main>
        );
    }
}

export default Login;