import React from 'react'

export default function AddTodos(props) {

    // const [inputText, setInputText] = useState("");

  return (
    <div id='addTodosDiv'>

    <input type="text" placeholder="Create Task" id='addTodoInput' value={props.inputText}  onChange={(e) => props.setInputText(e.target.value)} />
    <button onClick={() => {
      
        props.inputText.trim() !== "" && props.setTasks(props.tasks.concat({id:Date.now(), text: props.inputText}));
        props.setInputText("");
      
        
    }} id='addTodoButton'><i className="fa-solid fa-plus"></i></button>
        
        
    </div>
  )
}
