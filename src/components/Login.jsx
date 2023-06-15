import { Button, Input, Stack } from '@chakra-ui/react'
 
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { loginUser, registerUser } from '../redux/AuthReducer/action';
import { Navigate, useNavigate } from 'react-router-dom';

const init = {
    email:'',
    password:''
}
const Login = () => {

  
const [userData, setUserData] = useState(init)

const dispatch = useDispatch()
// const navigate = useNavigate()
const {token} = useSelector(store=> store.authReducer)
// console.log({token});

const handleSubmit = (e) => {
  e.preventDefault()
 dispatch(loginUser(userData)) 
 
}


  return (
     <Stack w={'60%'} m='auto'>

    <form onSubmit={handleSubmit}>
        <Input type='email' value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})} placeholder='Enter Email' />
        <Input type='password' value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} placeholder='Enter Password' />
   <Button type='submit' >Register</Button>
    </form>
     </Stack>
  )
}

export default Login