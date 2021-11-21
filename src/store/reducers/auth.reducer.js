import axios from "axios";
import { LOGIN, PASSWORD, USERNAME } from "../actions/auth.actions";

const initialStore = {
    username: "",
    password: "",
    token:""
}

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
        let data = axios.post('http://p.pcrpallet.com/api/users/user_token/', {
            name: action.payload.username, password: action.payload.password
        }).then(res => {
            // const token = res.data.token;
            // localStorage.setItem('jwtToken', token);
            console.log(res);
        });
        return {...state, username: action.payload.username, password: action.payload.password };
    }
    return state;
}

export default authReducer;