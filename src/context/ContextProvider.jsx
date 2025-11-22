import { useState } from "react";
import { TaskContext } from "./Context";

// Context Provider Component
// Receives `children` so anything wrapped by this provider
// can access the context values.

const TaskContextProvider = ({children})=> {

    // State to store all tasks (loaded from localStorage initially)
    const [allTasks, setAllTasks] = useState(()=> {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    })


    return (
        // Passing both values inside an object
        <TaskContext.Provider value={{allTasks, setAllTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

// Export provider so it can wrap <App />
export default TaskContextProvider;