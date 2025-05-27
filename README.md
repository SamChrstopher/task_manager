# 🧠 React Task Manager App

A **React Task Manager** application built step-by-step to demonstrate **progressive complexity** using the **latest React features** like `Hooks`, `Context`, `useReducer`, `Suspense`, `Lazy Loading`, and `Error Boundaries`.

---

## 🚀 Goal of the Project

- Build a **Task Manager** with **functional components**.
- Use **modern React Hooks** (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, `useContext`, `useReducer`).
- Build **custom hooks** for reusability.
- Implement **Error Boundaries**, **Suspense**, and **Lazy Loading** for production-ready structure.

---

## 🧩 Features

1. Functional Components using ES6+ syntax
2. State Management using:
   - `useState()`
   - `useReducer()`
3. Side Effects with `useEffect()`
4. DOM Manipulation with `useRef()`
5. Performance Optimization with `useMemo()` & `useCallback()`
6. Global State with `useContext()`
7. Reusable Logic with Custom Hooks
8. Error Handling with Error Boundaries
9. Code Splitting with `React.lazy` and `Suspense`

---

## 🛠️ Tech Stack

- React (Vite or CRA)
- JavaScript (ES6+)
- HTML & CSS (Tailwind or basic)
- Browser LocalStorage

---

## 🧱 Project Structure Plan

### ✅ Step 1: Task Input + useState
- Create basic input UI.
- Add tasks using `useState()`.

### ✅ Step 2: Persist Tasks + useEffect
- Load tasks from `localStorage` on app mount.
- Save tasks to `localStorage` on every update.

### ✅ Step 3: DOM Focus + useRef
- Auto-focus on task input when app loads.

### ✅ Step 4: Performance Optimization
- Use `useMemo()` to compute filtered tasks.
- Use `useCallback()` for stable handlers.

### ✅ Step 5: Global State + useContext
- Share task data without prop drilling.

### ✅ Step 6: useReducer for Complex State
- Centralized logic for: `add`, `delete`, `toggle`, `clear`.

### ✅ Step 7: Custom Hooks
- `useLocalStorage()` – sync state with `localStorage`.
- `useForm()` – handle form inputs.

### ✅ Step 8: Suspense & Error Boundaries
- Lazy load Task list.
- Handle component errors gracefully using Error Boundaries.

---

## 🔁 Component Lifecycle Mapping

| Lifecycle (Class)           | Hook Equivalent in Functional Component       | When it Runs               |
|----------------------------|-----------------------------------------------|----------------------------|
| `constructor`              | `useState()`, `useReducer()`                  | On Component Init          |
| `componentDidMount`       | `useEffect(() => {...}, [])`                 | After First Render         |
| `componentDidUpdate`      | `useEffect(() => {...}, [deps])`             | On Dependency Update       |
| `componentWillUnmount`    | `useEffect(() => return () => {...}, [])`    | Before Component Unmount   |
| `shouldComponentUpdate`   | `React.memo()`, `useMemo()`, `useCallback()` | Optimization Phase         |
| `componentDidCatch`       | Error Boundary (class component)              | On Runtime Error           |
| `getSnapshotBeforeUpdate` | `useLayoutEffect()`                           | Before DOM Updates         |

---
