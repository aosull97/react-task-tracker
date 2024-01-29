import React, {useState} from 'react'
import Task from '../Task/Task'


const Tasks = ({tasks, onDelete, onToggle}) => {


  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}
 
export default Tasks
