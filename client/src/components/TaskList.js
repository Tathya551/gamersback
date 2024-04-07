import React from "react";

const TaskList = ({ tasks, onEditInitiated, onDeleteTask }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "No due date";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2 className="mb-4">Task List</h2>
      {tasks.length > 0 ? (
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task._id} className="list-group-item">
              <h5>{task.title}</h5>
              <p>Description: {task.description}</p>
              <p>Due Date: {formatDate(task.dueDate)}</p>
              <p>Status: {task.status}</p>
              <button
                onClick={() => onEditInitiated(task)}
                className="btn btn-secondary me-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteTask(task._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
