export const USERNAME = "USERNAME";
export const PASSWORD = "PASSWORD";
export const LOGIN = "LOGIN";
export const REFRESH_TOKEN = "";

// // username
export const setUsername = (username) => {
    return { type: USERNAME, payload: { username } };
}
// // password
export const setPassword = (password) => {
    return { type: PASSWORD, payload: { password }};
}
// login
export const loginUser = (username, password) => {
    console.log({
        "username": username,
        "password": password
    });
    return { type: LOGIN, payload: { username, password } };
}
// refresh token
export const refreshToken = (refresh_token) => {
    return { type: REFRESH_TOKEN, payload: { refresh_token } }
}