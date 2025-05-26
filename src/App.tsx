import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import { Task } from './types/task';


function App(){
    const [tasks, setTasks] = useState<Task[]>([])
    const [input, setInput] = useState('')
    const addTask =()=>{
        if(input.trim()){
            setTasks(prev=>[...prev, {id:Date.now(), task:input, completed:false}])
            setInput("")
        }
    }
    //useEffect for mount
    useEffect(()=>{
        const stored = localStorage.getItem("tasks")
        if(stored){
            setTasks(JSON.parse(stored))
        }
    },[])
    //If dependency array is empty, it run at the start of application (onMount)
    //If tasks are not updated.
    //side effects to retrieve from the local storage to retrieve if only task obj exists.

    //useEffect for Update
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])

    //useLayoutEffect() for scroll of DOM
    const listEndRef = useRef<HTMLDivElement | null>(null)
    useLayoutEffect(()=>{
        if(listEndRef.current){
            listEndRef.current.scrollIntoView({
                behavior:"smooth" //It smoothly renders the layout
            })
        }
    },[tasks])

    return (
        <div>
            <h1>Task Manager</h1>
            <input value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map(task=>(
                    (<li key={task.id}>{task.task}</li>)
                ))}
            </ul>
        </div>
    )
}