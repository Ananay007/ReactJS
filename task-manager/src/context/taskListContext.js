import React, {createContext, useState, useEffect} from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = (props)=>{
    const initialState = JSON.parse(localStorage.getItem("tasks")) || []
    
    const [tasks,setTasks]= useState(initialState)
    const [editItem, setEditItem]= useState(null)

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title)=>{
        setTasks([...tasks, {title:title, id: Date.now()}])
    }
    const deleteTask = id =>{
        setTasks(tasks.filter(task => task.id !== id))
    }
    const clearList = ()=>{
        setTasks([])
    }
    const findItem = id =>{
        const item = tasks.find(task => task.id === id)
        setEditItem(item);
    }
    const editTask = (title,id) =>{
        const newItems = tasks.map(task => (task.id ===id ? {title, id} : task));
        setTasks(newItems)
        setEditItem(null)
    }
    return(
        <div>
               <TaskListContext.Provider value={{
                   tasks, addTask, deleteTask, clearList, findItem, editItem, editTask
                   }}>
                   {props.children}
               </TaskListContext.Provider>
        </div>
    )
}
export default TaskListContextProvider;