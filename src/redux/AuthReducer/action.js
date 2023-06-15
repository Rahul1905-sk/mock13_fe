import { baseUrl } from "../../Url";
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionType";
 


//to login
export const loginUser = (obj) => { 
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(`${baseUrl}/login`, obj)
      .then((res) => {
        if(res.data.token) {
          alert(res.data.msg)
          localStorage.setItem('tokken', JSON.stringify(res.data.token))
          console.log(res.data.token);
        } else {
          alert('Login Failed')
        }
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })})
      .catch(() => dispatch({ type: LOGIN_FAILURE }));
  };
};


//to register
export const registerUser = (obj) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(`${baseUrl}/register`, obj)
      .then((res) => {
        alert(res.data.msg)
        dispatch({ type: SIGNUP_SUCCESS, payload: '' })
      })
      .catch(() => dispatch({ type: LOGIN_FAILURE }));
  };
};
