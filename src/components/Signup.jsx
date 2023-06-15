import { Button, Input, Stack } from '@chakra-ui/react'
 
import { useDispatch } from "react-redux";
import React, { useState } from 'react'
import { registerUser } from '../redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

const init = {
    username: '',
    avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
    email:'',
    password:''
}

const Signup = () => {

const [userData, setUserData] = useState(init)

const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
dispatch(registerUser(userData))
navigate('/login')
}

  return (
     <Stack w={'60%'} m='auto'>

    <form onSubmit={handleSubmit}>
        <Input type='text' value={userData.username} onChange={(e)=> setUserData({...userData, username:e.target.value})} placeholder='Enter Username' />
        <Input type='text' value={userData.avatar} onChange={(e)=> setUserData({...userData, avatar:e.target.value})} placeholder='Enter Avatar' />
        <Input type='email' value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})} placeholder='Enter Email' />
        <Input type='password' value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} placeholder='Enter Password' />
   <Button type='submit' >Register</Button>
    </form>
     </Stack>
  )
}

export default Signup