import React from 'react'
import logo from "../assets/images/logo.png";


function NavBar() {
  return (
      <div className="navbar">
          
         
              <div className="logo">
                  <img src={logo} alt="zouqlogo" />
              </div>
              <ul className='lists circularstd-medium-white-16px'>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#Services'>Services</a></li>
                  <li><a href='#Pricing'>Pricing</a></li>
                  <li><a href='#Blog'>Blog</a></li>
                  <li><a href='#About'>About</a></li>
              </ul>

              <div className="btn-primary circularstd-bold-white-18px">
                  <button>Sign in</button>
              </div>

         
        </div>
  )
}

export default NavBar