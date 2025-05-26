# Goal for the Project
=> Built a React app with Progressive Complexity
=> Built a Task Manager using the latest React Features
=> Features:
1. Functional Components using functional constructors.
2. Using Hooks (useState, useEffect, useRef, useMemo, useCallback, useContext, useReducer)
3. Custom Hooks
4. Life-Cycle equivalents
5. Error boundaries
6. Suspence and Lazy Loading

## Step-by-step Plan
Step 1.
Objective: Create a task list where users can add tasks.
Hooks covered: useState()
Implementation:
1. Setup a Basic React app using create-react-app or vite
2. Create App.js with simple input field and button to add tasks.
3. Use useState to manage task.

Step 2.
Objective:
1. Side Effects with useEffect
2. Persist tasks to local storage
3. Hooks covered: useEffect()
Implementation:
1. Use useEffect to load task from local storage onMount
2. save tasks to localStorage whenever task changes.

Step 3.
Objective:
1. DOM references with useRef()
2. Auto focus on the input when the app loads.
3. Hooks covered: useRef()

Step 4:
Objective:
1. Performance Optimization with useMemo and useCallback.
2. Only compute filtered task and memorise tasks.
Hooks covered: useMemo(), useCallback()

Step 5:
Objective:
1. Global state with useContext()
2. Share task between components without prop-drilling
Hooks covered: createContext(), useContext()

Step 6:
Objective:
1. State Machine with useReducer()
2. Manage complex task actions like add, delete, toggle, clear with a reducer.
3. Hooks covered: useReducer()

Step 7:
Objective:
1. Custom Hooks
2. Extract reusable logic for local storage sync or input handling
Hooks covered: useLocalStorage(), useForm()

Step 8:
Objective:
1. Suspense, Lazy-loading and Error-Boundaries.
2. Concepts covered: 
a. Optimize load time
b. Handle Component crashes.
c. React.lazy
d. Suspense
e. Error-Boundaries (acting like a class component wrapper).

## Component API Lifecycle
=========================================================================================================
|| LifeCycle Class          || Hook in functional component                || When it runs             ||
=========================================================================================================
|| Constructor              || useState(), useReducer()                    || On Component init        ||
|| componentDidMount        || useEffect(()={...},[])                      || After first render.      ||
|| componentDidUpdate       || useEffect(()=>{...},[dep])                  || After Updates.           ||
|| componentWillUnMount     || useEffect(()=>{return()=>{...}},[])         || Before unMount           ||
|| getDerivedStateFromProps || Derive values manually in render            || Use logic in the body    ||
|| shouldComponentUpdate    || react.memo() or useMemo() or useCallback()  || Optimization technique   ||
|| componentDidCatch        || class based error boundary wrrapers         || Error Handling           ||
|| getSnapshotBeforeUpdate  || useLayoutEffect() hook                      || Before DOM mutations     ||
=========================================================================================================
