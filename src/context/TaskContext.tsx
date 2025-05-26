import React, {createContext, useReducer, Dispatch, ReactNode} from "react";
import {Task} from "../types/task"
import { TaskAction, taskReducer } from "../reducers/taskReducer";

//Create context to create a shared global state, comming from ContextAPI
//UseReducer: React Hook to handle complex state logic using actions.
//Dispatch: TypeScript typed for dispatching reducer action
//ReactNode: A Type that represents any valid child -> Valid childs (JSX, General strings, numbers, etc,..)

//Task - an interface representing an interface
interface TaskContentType{
    tasks:Task[]
    dispatch:Dispatch<TaskAction>
}

//TaskReducer function to handle task logic {ADD, DELETE, and TOGGLE}
//TaskAction a union type that allows only ADD, DELETE and TOGGLE
//TaskContextType describes the whole tasks logic and also dispatch function for sending task action to 
//the reducer function
export const TaskContext = createContext<TaskContentType | undefined>(undefined)
export const TaskProvider : React.FC<{children:ReactNode}> = ({children})=>{
    const [tasks, dispatch] = useReducer(taskReducer,[])
    return (
        <TaskContext.Provider value={{tasks, dispatch}}>{children}</TaskContext.Provider>
    )
}