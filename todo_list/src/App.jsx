import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h1>📝 Todo List</h1>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit">Add Task</button>
        </form>

        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index}>
              <span>{item}</span>

              <button onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}