import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "./redux/tasksSlice";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const [editingTask, setEditingTask] = useState(null);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  //just so that I can make a new commit. Please ignore.

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleEditInitiated = (task) => {
    setEditingTask(task);
    setShowAddTaskForm(false);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleTaskUpdated = () => {
    setEditingTask(null);
    dispatch(fetchTasks());
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Tasks Manager</h1>
      <button className="btn btn-primary mb-3" onClick={toggleAddTaskForm}>
        {showAddTaskForm ? "Cancel" : "+ Add New Task"}
      </button>
      {showAddTaskForm && <AddTaskForm />}
      {editingTask ? (
        <EditTaskForm
          task={editingTask}
          onTaskUpdated={handleTaskUpdated}
          onCancel={handleCancelEdit}
        />
      ) : (
        <TaskList
          tasks={tasks}
          onEditInitiated={handleEditInitiated}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
}

export default App;
