import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser, setUsername, setPassword, refreshToken } from "../store/actions/auth.actions";

class Login extends Component {
    constructor(props) {
        super(props);
    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleNameChange(event) {
        // this.setState({value: event.target.value});
        // console.log("name:: ", event.target.value);
        this.props.setUsername(event.target.value);
      }

      handlePasswordChange(event){
          this.props.setPassword(event.target.value);
      }

      handleSubmit(){
        console.log('props', this.props);
        // this.props.login(
        //     this.props.username,
        //     this.props.password
        // );
        this.props.login(
            'reimi', 'iwtdstw'
        )
      }
    
    //   handleSubmit(event) {
    //     // alert('A name was submitted: ' + this.state.value);
    //     // axios.post('http://p.pcrpallet.com/api/users/user_token/', {'name': 'reimi', 'password': 'iwtdstw'}).then(res => {
    //     //     // const token = res.data.token;
    //     //     // localStorage.setItem('jwtToken', token);
    //     //     console.log("token: ", res);
    //     // });
    //     this.props.login();
    //     // event.preventDefault();
    //   }

    render(){
        return (
            <main>
                {/* <form onSubmit={this.handleSubmit}> */}
                <label>
                    Name:
                    <input type="text" name="name" 
                        //value={this.props.username} 
                        // onChange={this.props.getName(event.target.value)}
                        onChange={this.handleNameChange} 
                    />
                </label>
                <label>
                    Password:
                    <input type="text" 
                    name="password" 
                    onChange={this.handlePasswordChange} />
                </label>
                <input
                // onClick={() => this.props.login("reimi", 'iwtdstw')} 
                onClick={() => this.handleSubmit()}
                type="button" value="Submit" />
                <input
                // onClick={() => this.props.login("reimi", 'iwtdstw')} 
                onClick={() => this.props.refresh('test')}
                type="button" value="Refresh" />
                {/* </form> */}
            </main>
        );
    }
}


// const mapStateToProps = (state) => {
//     console.log('STATE: ', state);
//     const { cart, total } = state.cartItemReducer;
//     return {cart: cart, total: total};
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     console.log("Own: ", ownProps);
//     return {
//         username: (name) => dispatch(getUsername(name)),
//         // password: () => dispatch(),
//         login:() => dispatch(loginUser('reimi', 'iwtdstw')),
//         // login:() => console.log("LOGIN THIS")
//     };
// }
function mapStateToProps(state){
    console.log('map state', state.authReducer);
    const { username, password } = state.authReducer;
    return {
        username, password
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        // getName: (name) => getUsername(name),
        // getPassword,
        // username,
        // password,
        // setUsername: (name) => setUsername(name),
        setUsername,
        setPassword,
        login:(username, password) => loginUser(username, password),
        refresh: (token_refresh) => refreshToken(token_refresh)
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);