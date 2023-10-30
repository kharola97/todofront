import React, {useState} from 'react'

import { Link,useNavigate} from 'react-router-dom'

import "../CSS/Register.css"
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        phone:"",
        email:""
      })
    
      
    
      const handleInputChange =  (e)=>{
             const {name, value} = e.target;
             setFormData({...formData,[name]:value})
      }
      const handleSubmit = async(e) =>{
        e.preventDefault()
        const response = await axios.post(`http://localhost:4000/register`, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      const res = response.data;
      
      if (res.status === false || !res) {
        let msg = res.message;
        console.log(msg, "msg")
      } else {
       
        navigate("/login");
      }
      }
  return (
    <div className='register' >
        <div className='register-form'>
        <h1>Register</h1>
        <form method="POST" className='register-elements' onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='username' required value={formData.username}onChange={handleInputChange}></input>
            <input type='password' name='password' placeholder='password' required minLength="6"value={formData.password}onChange={handleInputChange}></input>
            <input type='email' name='email' placeholder='email' required value={formData.email}onChange={handleInputChange}></input>
            <input type='tel' name='phone' placeholder='phone' minLength="10" maxLength="10" required value={formData.phone}onChange={handleInputChange}></input>
        <button type='submit'>Register</button>
        <h3>Already have an account? <Link to='/login'>Login</Link></h3>
        </form>
        </div>
         </div>
  )
}

export default Register