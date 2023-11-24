
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import "../CSS/Pending.css"
import { useNavigate } from 'react-router-dom'

const base_url = "https://todolist-c9ih.onrender.com"

const Pending = () => {
    const [taskData, setTaskData] = useState([]);
    const navigate = useNavigate()

      useEffect(() => {
       
        const fetchPendingTasks = async () => {
          try {
            const token = localStorage.getItem("token")
            if(token){
            const decoded = jwtDecode(token)
            const userId = decoded.id
           
            
            const response = await axios.get(`${base_url}/${userId}`);
            const res = response.data; 
            
           if(res.status===false || !res){
              const msg = res.message
              alert(msg)
           }
           else{
            
            setTaskData(res.data);
           }
          } 
        }catch (error) {
           
            console.error('Error fetching pending tasks:', error);
          }
        };
    
        
        fetchPendingTasks();
      }, []);
      const handleTaskCompleted = async (taskId) => {
       
        
        const token = localStorage.getItem("token")
            if(token){
            const decoded = jwtDecode(token)
            const userId = decoded.id
           
            
            const response = await axios.post(`${base_url}/${userId}/${taskId}`,{},{
                headers : {
                    "Content-Type" :"application/json",
                    "token" : token
                }
            });
            const res = response.data 
            console.log(response.data,"response1 data")
           if(res.status===false || !res){
              const msg = res.message
              alert(`${msg}`)
           }
           else{
            navigate("/profile")
            
           }
          } 
      };
    
  return (
    
    <div className='main-task'>
      
      <table>
          <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
            <th>CreatedAt</th>
           
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
        taskData.map((data)=>{
            return(
                <tr key={data._id}>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.createdAt}</td>
                    <td>{data.completedAt ? `Completed on --${data.completedAt}`: "task in progress"} <button type='submit' onClick={()=>handleTaskCompleted(data._id)}>Done</button> </td>

                </tr>
            )
        })
    }
          </tbody>
    </table>
  </div>
  
  )
}

export default Pending