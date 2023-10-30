import React from 'react'
import "../CSS/Nav.css"
import Logo from "../Images/logo.png"
import { Link } from 'react-router-dom'
const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  

  const handleLogout = (e)=>{
    localStorage.removeItem("token")
     setIsLoggedIn(false)
  }
  return (
    <div className='navbar'>

        <img src={Logo} alt='empty'></img>
      {isLoggedIn ? (<div className='nav-right'> 
        <Link to='/profile'><button>profile</button></Link>

        <Link to='/'> <button onClick={handleLogout}>logout</button></Link>

        
        </div>) : (<div className='nav-right'> 
        <Link to='/'><button>Home</button></Link>

        <Link to='/login'> <button>Sign-In</button></Link>

        <Link to='/register'> <button>Register</button></Link>
        </div>)}
        
        
         </div>
  )
}

export default Navbar