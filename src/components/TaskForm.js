import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css'; // Import the CSS file

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!taskName || !date || !time || !status || !estimatedTime) {
      alert('Please fill out all fields.');
      return;
    }

    addTask({ taskName, date, time, status, estimatedTime });
    setTaskName('');
    setDate('');
    setTime('');
    setStatus('');
    setEstimatedTime('');
  };

  const handleShowTasks = () => {
    navigate('/tasks');
  };

  return (
    <div className="task-form-container">
      <h2 className="text-center">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <table className="task-form-table">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="task-input"
                  placeholder="Task Name"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="date"
                  className="task-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="time"
                  className="task-input"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <select
                  className="task-input"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="task-input"
                  placeholder="Estimated Time (hours)"
                  value={estimatedTime}
                  onChange={(e) => setEstimatedTime(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" className="task-button">Add Task</button>
                <button type="button" className="task-button" onClick={handleShowTasks}>Show Tasks</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default TaskForm;
