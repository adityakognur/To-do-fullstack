import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import UpdateTask from './components/UpdateTask';
import './App.css'; // Import global CSS for dark theme

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskForm addTask={addTask} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/update-task/:id" element={<UpdateTask tasks={tasks} updateTask={updateTask} />} />
      </Routes>
    </Router>
  );
}

export default App;
