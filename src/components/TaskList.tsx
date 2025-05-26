// components/TaskList.tsx
import React from "react";
import { Task } from "../types/task";

type TaskListProps = {
  tasks: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
