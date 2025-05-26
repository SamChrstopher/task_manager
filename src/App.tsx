import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Task } from "./types/task";
import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";
import TaskList from "./components/TaskList";

function App() {
  //State to manage each the tasks inside the array
  const [tasks, setTasks] = useState<Task[]>([]);
  //state to manage the input data from the input field
  const [input, setInput] = useState("");
  //Function to add new task to the array
  const addTask = () => {
    //Checking if the input is empty or not
    if (input.trim()) {
      //Adding the new tasks with the unique id in the existing array
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), task: input, completed: false },
      ]);
      //Resetting the input field to empty
      setInput("");
    }
  };
  //useEffect for mount
  useEffect(() => {
    //Retrieving the tasks data stored in the local storage
    const stored = localStorage.getItem("tasks");
    //If the data exists
    if (stored) {
      //Converting the data from the string to the array object
      setTasks(JSON.parse(stored));
    }
  }, []);

  //If dependency array is empty, it run at the start of application (onMount)
  //If tasks are not updated.
  //side effects to retrieve from the local storage to retrieve if only task obj exists.

  //useEffect for Update
  useEffect(() => {
    //First we're converting the array object into a string and storing the data
    //in the localStorage under the key "tasks", only if the tasks dependency change.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //useLayoutEffect() for scroll of DOM
  const listEndRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (listEndRef.current) {
      listEndRef.current.scrollIntoView({
        behavior: "smooth", //It smoothly renders the layout
      });
    }
  }, [tasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskButton onClick={addTask} label="Add" />
      <TaskList tasks={tasks} />
      {/* <input value={input} onChange={(e)=>setInput(e.target.value)}/> */}
      {/* <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map(task=>(
                    (<li key={task.id}>{task.task}</li>)
                ))}
            </ul> */}
    </div>
  );
}
export default App;
