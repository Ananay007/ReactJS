import React, { useContext, useState, useEffect } from 'react';
import {TaskListContext} from './context/taskListContext';

const TaskInput = ()=>{
    const {addTask, clearList, editItem , editTask}= useContext(TaskListContext);
    const [task , setTask] = useState('');

    const handleChange = e =>{
        setTask(e.target.value)
    }
    const handleSubmit = e=>{
        e.preventDefault();
        if(editItem === null){
            addTask(task);
            setTask("");
        }else{
            editTask(task, editItem.id)
        }
        
    }
    useEffect(()=>{
        if(editItem !==null){
            setTask(editItem.title)
        }else{
            setTask('');
        }
    }, [editItem]);
    return(
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" 
            className="task-input" placeholder="Type here.."
            value={task} required />
            <div className="buttons">
                <button className="btn add-task-btn" type="submit">
                   {editItem ? 'Edit Task': 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={clearList}>
                    Clear
                </button>
            </div>
        </form>
    )
}
export default TaskInput;