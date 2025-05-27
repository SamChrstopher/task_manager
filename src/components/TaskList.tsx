import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList: React.FC = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("TaskContext not found");

  const { tasks, dispatch } = context;

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div>
      <h2>🕒 Incomplete Tasks</h2>
      <ul>
        {incompleteTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: 'TOGGLE', payload: task.id })}
            />
            {task.task}
            <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })}>❌</button>
          </li>
        ))}
      </ul>

      <h2>✔️ Completed Tasks</h2>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id} style={{ textDecoration: 'line-through', opacity: 0.6 }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: 'TOGGLE', payload: task.id })}
            />
            {task.task}
            <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;