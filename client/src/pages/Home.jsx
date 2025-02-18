import { useState } from "react"

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [editMode, setEditMode] = useState(true)

  const addTask = () => {
    if(newTask.trim() !== ""){
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask("");
    }
  }
  
  const toggleEdit = () => {
    if (editMode === true) {
      setEditMode(false);
    } else {
      return
    }
  }
  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);  
  }
  return (
    <div className="flex items-center justify-center mt-0 pt-0 pb-3 ">
          { editMode ? 
          <div className ="flex mt-3 p-5 rounded-4xl border-1 border-brownDefault">
            <span className='font-normal'>There are no tasks yet. <button 
            className='font-normal underline-offset-1 cursor-pointer text-brownDefault'
            onClick={toggleEdit}>
                Edit
                </button> to start
            </span>
          </div> :
              <ol className='p-3'>
              <div className ='flex justify-between mt-3 p-4 bg-white rounded-4xl focus-within:bg-listFocus'>
                <input
                placeholder='Enter a task'
                value={newTask}
                onChange = {(e) => setNewTask(e.target.value)}
                className= 'focus-within:outline-hidden border-b-2 border-brownDefault'
                />
                <button
                  onClick={addTask} 
                  className='cursor-pointer bg-blue-950 
                  text-white rounded-full align-middle w-6 h-6
                  place-items-end m-0'>
                  +
                </button>
              </div>
                {tasks.map((task, index) =>
                          <li key={index} className=" mt-3 p-4 bg-white rounded-4xl focus-within:bg-listFocus">
                              <input
                                type='text'
                                value={task}
                                placeholder='Enter your task here!'
                                onChange={(e) => {
                                  const updateTask = [...tasks];
                                  updateTask[index] = e.target.value;
                                  setTasks(updateTask);
                                }}
                                className="border-b-2 border-b-
                                brownDefault focus-within:outline-hidden"/>
                                <button 
                                onClick={() => deleteTask(index)}
                                className='cursor-pointer bg-brownDefault w-6 h-6 ml-1 rounded-full'>
                                 🗑
                                </button>
                          </li>
                        )}
                  
          </ol>
}
    </div>
  )
}
