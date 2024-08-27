import React from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css'; // Import the CSS file

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="task-item">
      <div className="task-details">
        <p><strong>Task:</strong> {task.taskName}</p>
        <p><strong>Date:</strong> {task.date}</p>
        <p><strong>Time:</strong> {task.time}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Estimated Time:</strong> {task.estimatedTime} hours</p>
      </div>
      <div className="task-buttons">
        <Link to={`/update-task/${task.id}`} className="task-edit-btn">Edit</Link>
        <button onClick={() => deleteTask(task.id)} className="task-delete-btn">Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
