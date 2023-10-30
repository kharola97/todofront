import React from 'react'
import "../CSS/Profile.css"
import image1 from "../Images/createtask.jpg"
import pendingtask from "../Images/pending.jpg"
import completed from "../Images/completed.jpg"
import alltasks from "../Images/alltasks.jpg"
import {  useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    const handleClickCreate=(e)=>{
       e.preventDefault()
       navigate("/createtasks")
    }

    const handleClickPending = (e)=>{
        e.preventDefault()
        navigate("/pending")
    }
    const handleClickCompleted = (e)=>{
        e.preventDefault()
        navigate("/completed")
    }
    const handleClickAllTasks = (e)=>{
        e.preventDefault()
        navigate("/alltasks")
    }

  return (
    <div className="profile-main">
        
            <div className='create'> <img src={image1} alt='loading failed'></img>  <button type='submit' onClick={handleClickCreate}>Create a new task</button></div>
            <div className='pending'> <img src={pendingtask} alt='loading'></img> <button type='submit' onClick={handleClickPending} >Pending tasks</button></div>
            <div className='completed'> <img src={completed} alt='loading'></img> <button type='submit'onClick={handleClickCompleted}>Completed tasks</button></div>
           <div className='alltasks'> <img src={alltasks} alt='loading'></img> <button type='submit' onClick={handleClickAllTasks}>All tasks</button></div>
        
    </div>
  )
}

export default Profile