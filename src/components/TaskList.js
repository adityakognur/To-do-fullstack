import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import TaskItem from './TaskItem';
import './TaskList.css'; // Import the CSS file

const TaskList = ({ tasks, deleteTask, editTask }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBack = () => {
    navigate('/'); // Navigate to the form page (or any other path)
  };

  return (
    <div className="task-list-container">
      {tasks.length === 0 ? (
        <p className='no-task'>No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            editTask={editTask} 
          />
        ))
      )}
      <div className='back-button-container'>
        <button className="task-button back-button" onClick={handleBack}>Back to Form</button>
      </div>
    </div>
  );
};

export default TaskList;
