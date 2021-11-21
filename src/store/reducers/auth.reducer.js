import axios from "axios";
import { LOGIN, PASSWORD, REFRESH_TOKEN, USERNAME } from "../actions/auth.actions";

const initialStore = {
    username: "",
    password: "",
    token_access: "",
    token_refresh: ""
}

// set auth provide auth error multiple
function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
//

function authReducer(state = initialStore, action){
    // console.log(action.type);
    if(action.type === USERNAME){
        console.log("username: ", action.payload.username);
        return { ...state, username: action.payload.username};
    }
    if(action.type === PASSWORD){
        return { ...state, password: action.payload.password};
    }
    if(action.type === LOGIN){
        // console.log(action.payload);
        axios.post('http://p.pcrpallet.com/api/users/user_token/', {
            name: action.payload.username, password: action.payload.password
        }).then(res => {
            // const token = res.data.token;
            localStorage.setItem('token_access', res.data.token.access);
            localStorage.setItem('token_refresh', res.data.token.refresh);
            // console.log(res.data.token.access);
            // set auth function here
            // setAuthorizationToken(res.data.token.access);
        }).catch( (err) => {
            if(err.response.status === 401){
                console.log("wrong password");
            }
            if(err.response.status === 400){
                console.log("fields empty");
            }
        });
        return {...state, username: action.payload.username, password: action.payload.password };
    }
    // refresh token
    if(action.type === REFRESH_TOKEN){
        axios.post('http://p.pcrpallet.com/api/users/user_token_refresh/', {
            refresh: action.payload.token_refresh
        }).then(ref => {
            console.log(ref);
        }).catch((err) => {
            console.log(err);
        });
        return { ...state, token_access: action.payload.token_access };
    }
    // if(action.type === 'not provide yet'){
        
    // }
    return state;
}

export default authReducer;