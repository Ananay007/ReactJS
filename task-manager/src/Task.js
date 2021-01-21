import React, { useContext } from 'react';
import {TaskListContext} from './context/taskListContext';

function Task({task}) {
    const {deleteTask, findItem} = useContext(TaskListContext);

    const deleteIcon = () =>{
        deleteTask(task.id)
    }
    // console.log(task);
    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={deleteIcon}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="btn-edit task-btn" onClick={()=>findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;
