import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', marginBottom:'80px'}}>
        <a href="/login">Sign In</a>
        <a href="/register">Sign Up</a>
        <a href="/blogs">Blogs</a>
    </div>
  )
}

export default Navbar