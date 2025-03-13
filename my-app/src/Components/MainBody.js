import React, {useState} from 'react'
import Heading from './Heading';
import AddTodos from './AddTodos';
import Todos from './Todos';



export default function MainBody() {
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([
          ]);

  return (
    <div id='mainBody'>
        <>
        <Heading/>
        <AddTodos inputText = {inputText} tasks = {tasks} setInputText = {setInputText} setTasks = {setTasks}/>
        <Todos inputText = {inputText} tasks = {tasks} setInputText = {setInputText} setTasks = {setTasks}/>
        </>
    </div>
  )
}
