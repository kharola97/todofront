import React from 'react'
import imageleft from "../Images/body-left.jpg"

import "../CSS/Home.css"

const Home = () => {
    
  return (
    <div className='home'>
        <img src={imageleft} alt='loading failed'></img>
        <div className='home-content'>
            <h1 >Why do we need a <span>to do list? </span></h1>
            <ul >
                <li>Creating and maintaining a daily to-do list can help improve your overall memory by reinforcing your short-term memory. By writing tasks </li>
                <li>To-do lists can be used to improve time management because all of your tasks are laid out clearly in advance</li>
                <li>Having a to-do list makes it easier to organize everything that you want to accomplish in the day so that you can start fresh the next</li>
                <li>Planning the activities you want to complete each day can help declutter your life and remove a sense of being overwhelmed by everything that needs to be done</li>
                <li>A to-do list can help you organize your time and finish your tasks more efficiently, giving you more free time</li>
                
            </ul>
            <button className='bottom-btn'>Explore Now</button>
        </div>
    </div>
  )
}

export default Home