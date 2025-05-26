// components/TaskButton.tsx
import React from "react";

type TaskButtonProps = {
  onClick: () => void;
  label: string;
};

const TaskButton: React.FC<TaskButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default TaskButton;
