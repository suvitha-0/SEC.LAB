import React from 'react';

function App(){
  const[task, setTask] = React.useState([]);
  const[text, setText] = useState("");
  const addTask = () => {
    setTask([...task, {name: text, completed: false}]);
    setText("");

  }
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter a task'
      />
      <button onclick={addTask}>Add</button>
      <ul>
        {tasks.map((task,index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
            />
            <span>{task.name}</span>
            <button onClick={()=>deleteTask(index)}>Delete</button>
              
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
