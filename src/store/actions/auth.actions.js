export const USERNAME = "USERNAME";
export const PASSWORD = "PASSWORD";
export const LOGIN = "LOGIN";

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