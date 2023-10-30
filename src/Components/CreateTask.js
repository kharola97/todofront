import React, { useState } from 'react'
import "../CSS/Createtask.css"
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

import {  useNavigate } from 'react-router-dom'

const CreateTask = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        title:"",
        description:""
    })
    const handleinputChange = (e)=>{
        const {name, value} = e.target
        setDetails({...details,[name]:value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const token = localStorage.getItem("token")
        if(token){
            const decoded = jwtDecode(token)
            const userId = decoded.id
            console.log(userId,)
            const response = await axios.post(`http://localhost:4000/task/${userId}`, details,{
                headers:{
                    "Content-Type" : "application/json",
                    "token" : token
                }
            });
            const res = response.data
            if(res.status === false || !res){
                let msg = res.message
                alert(msg)
            }
            else{
                navigate("/profile")
            }
        }
    }
    
  return (
    <div className='main-tas'>
    <div className='main-create'>
        <h2>Add a new task</h2>
        <form onSubmit={handleSubmit} >
        <div className='title'>
            <label htmlFor='title'>TITLE</label>
            <input type='text' name="title" id='title' required value={details.title} onChange={handleinputChange}></input>
        </div>
        <div className='description'>
            <label htmlFor='description'>Description</label>
            <textarea className='text-area' type='text' name="description" required value={details.description} onChange={handleinputChange} ></textarea>
        </div>
        <button type='submit'>Add task</button>
        </form>
    </div>
    </div>
  )
}

export default CreateTask