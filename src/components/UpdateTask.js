import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateTask.css'; // Import the CSS file

const UpdateTask = ({ tasks, updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskToUpdate = tasks.find(task => task.id === parseInt(id));
  const [taskName, setTaskName] = useState(taskToUpdate ? taskToUpdate.taskName : '');
  const [date, setDate] = useState(taskToUpdate ? taskToUpdate.date : '');
  const [time, setTime] = useState(taskToUpdate ? taskToUpdate.time : '');
  const [status, setStatus] = useState(taskToUpdate ? taskToUpdate.status : '');
  const [estimatedTime, setEstimatedTime] = useState(taskToUpdate ? taskToUpdate.estimatedTime : '');

  useEffect(() => {
    if (taskToUpdate) {
      setTaskName(taskToUpdate.taskName);
      setDate(taskToUpdate.date);
      setTime(taskToUpdate.time);
      setStatus(taskToUpdate.status);
      setEstimatedTime(taskToUpdate.estimatedTime);
    }
  }, [taskToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(parseInt(id), { id: parseInt(id), taskName, date, time, status, estimatedTime });
    navigate('/tasks');
  };

  return (
    <div className="update-task-container">
      <form onSubmit={handleSubmit}>
        <table className="update-task-table">
          <tbody>
            <tr>
              <td><input type="text" className="update-input" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><input type="date" className="update-input" value={date} onChange={(e) => setDate(e.target.value)} /></td>
            </tr>
            <tr>
              <td><input type="time" className="update-input" value={time} onChange={(e) => setTime(e.target.value)} /></td>
            </tr>
            <tr>
              <td>
                <select className="update-input" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><input type="text" className="update-input" placeholder="Estimated Time (hours)" value={estimatedTime} onChange={(e) => setEstimatedTime(e.target.value)} /></td>
            </tr>
            <tr>
              <td><button type="submit" className="update-button">Update Task</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default UpdateTask;
