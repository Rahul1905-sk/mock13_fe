import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Blog from '../components/Blog'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const AllRoutes = () => {

  return (
    
    <Routes>
        <Route path='/' element={<h1> Welcome to blogApp</h1>}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/register' element={<Signup />}  />
        <Route path='/blogs' element={
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        }  />

        
    </Routes>

  )
}

export default AllRoutes