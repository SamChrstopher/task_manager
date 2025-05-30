import React, {useContext, useState, useCallback} from "react";
import { TaskContext } from "../context/TaskContext";
import AddButton from "./AddButton";

const TaskInput : React.FC = ()=>{
    const [input, setInput] = useState("")
    const context = useContext(TaskContext)
    if (!context){
        throw new Error("task context not found!")
    }
    const {dispatch} = context
    //Without use Callback, handle add would be a new function on render even if the input didn't change
    //in the state.
    //We're trying to restrict the unncessary rendering of the child
    //Just the dependencies are considered.
    const handleAdd = useCallback(()=>{
        if (input.trim()){
            dispatch({type:'ADD', payload: input})
            setInput("")
        }
    },[input, dispatch])

    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter a Task" />
            {/* <button onClick={handleAdd}>Add</button> */}
            <AddButton onClick={handleAdd} label="Add task"/>
        </div>
    )
}