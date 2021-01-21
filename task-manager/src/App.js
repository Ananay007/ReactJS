// rafce
import React from 'react';
import TaskListContextProvider from './context/taskListContext';
import TaskList from './taskList';
import TaskInput from './TaskInput';
import './App.css';

const App = () => {
  return (
    <TaskListContextProvider>
    <div className="container">
      <div className="app-wrapper">
        <div className="main">
          <div className="header">
            <h1>Task Manager</h1>
          </div>
          <TaskInput />
        <TaskList />   
      </div>
      </div>
    </div> 
    
    </TaskListContextProvider>
  )
}

export default App
