import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionType"




const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  }
 
 export const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case LOGIN_REQUEST:
    return { ...state, isLoading: true, isError:false, isAuth:false }

  case LOGIN_SUCCESS:
    return { ...state, isLoading: false, isAuth:true, token:payload }

  case LOGIN_FAILURE:
    return { ...state, isLoading: false, isError:true }


  case SIGNUP_SUCCESS:
    return { ...state, isLoading: false, isAuth:false, token:payload }

  default:
    return state
  }
}

