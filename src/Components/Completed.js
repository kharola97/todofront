import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import "../CSS/Pending.css"


const base_url = "https://todolist-c9ih.onrender.com"

const Completed = () => {

    const [taskData, setTaskData] = useState([]);
  

      useEffect(() => {
       
        const fetchPendingTasks = async () => {
          try {
            const token = localStorage.getItem("token")
            if(token){
            const decoded = jwtDecode(token)
            const userId = decoded.id
           
            
            const response = await axios.get(`${base_url}/completedtasks/${userId}`);
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
                    <td>{data.completedAt ? `Completed on --${data.completedAt}`: "task in progress"}  </td>

                </tr>
            )
        })
    }
          </tbody>
    </table>
  </div>
  )
}

export default Completed