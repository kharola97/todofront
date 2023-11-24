import React, {useState} from 'react'
import "../CSS/Login.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const base_url = "https://todolist-c9ih.onrender.com"

const Login = ({setIsLoggedIn}) => {
  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const handleInputChange = (e)=>{
    const{name , value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post(`${base_url}/login`, formData,{
        headers:{
          "Content-Type" : "application/json"
        }
    });
    
    const res = response.data
   
    if (res.status === false || !res) {
      let msg = res.message;
      console.log(msg, "msg")
    } else {
      const token = res.data
      if(token){
        setIsLoggedIn(true)
      localStorage.setItem('token', token);
      }
      navigate("/profile");
    }
  }
  return (
    <div className='main-login'>
        <div className='login-form'>
        <h1>Login</h1>
        <form className='form-elements' onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleInputChange}></input>
            <input type='password' name='password' placeholder='password' value={formData.password} onChange={handleInputChange}></input>
        <button type='submit'>Log in</button>
        <h3>Dont have an account? <Link to='/register'>Register</Link></h3>
        </form>
        </div>
    </div>
  )
}

export default Login