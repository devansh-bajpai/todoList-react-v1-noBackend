import React from 'react'
import { useState } from "react";

export default function Todos(props) {

    

    const [isHoveredId, setHoveredId] = useState(-1);
    // const [isHovered, setIsHovered] = useState(false);

    // const [tasks, setTasks] = useState([
    //     { id: 1, text: "Buy groceries" },
    //     { id: 2, text: "Complete project" },
    //     { id: 3, text: "Go for a run" },
    //   ]);

      const deleteCard = (id) => {
        props.setTasks(props.tasks.filter((task) => {
           return (task.id !== id); 
        }))
      }


     

  return (
    // <div id='todosDiv'>
    //     <div className='card' onMouseEnter={() => {
    //         setIsHovered(true);
    //     }} onMouseLeave={() => {
    //         setIsHovered(false);
    //     }}>
    //         <h6 className='taskName'>Learn React</h6>
    //         {isHovered && 
    //             <button className='delete'><i className="fa-solid fa-trash"></i></button>
    //         }
    //     </div>
    // </div>
    <div id='todosDiv'>
    
    {/* () has been used instead of {} in function map so that it automatically returns jsx */}

    {props.tasks.map((task, idx) => (
       
        <div className='card' onMouseEnter={() => {
            setHoveredId(idx);
        }} onMouseLeave={() => {
            setHoveredId(-1);
        }}>
            <h6 className='taskName'>{idx+1}.  {task.text}</h6>
            {isHoveredId === idx && 
                <button onClick={() => {
                    deleteCard(task.id);
                }} className='delete'><i className="fa-solid fa-trash"></i></button>
            }
        </div>
    
    ))}

    {
        props.tasks.length === 0 &&
        <div className='card'>
            <h6 className='taskName noTask'>NO TASKS TO SHOW</h6>
        </div>
    }
   
    
   </div>
    

  )
}