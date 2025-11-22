import { useContext, useState } from "react";
import { TaskContext } from "../context/Context";
import { nanoid } from "nanoid";


const Inputbar = () => {
  // Accessing context values (tasks array + updater function)
  // We destructure the object passed from TaskContextProvider
  let {allTasks, setAllTasks} = useContext(TaskContext);
  
  // Local input state to control the input field
  const [taskInp, setTaskInp] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    //cast 1 : input is blank
    if(taskInp === "") {
      console.log("empty form not submited");
      return
    };

    // Create a NEW updated array of tasks
    // We copy old tasks (...allTasks)
    // Then add one new task object (id + task text)
    let updatedArr = [
      ...allTasks, 
      {
        id: nanoid(), 
        task: taskInp
      }
    ]

    
    setAllTasks(updatedArr);    // Update the context state (this re-renders UI)
    
    // Save the updated tasks in localStorage to persist across refreshes
    localStorage.setItem("tasks", JSON.stringify(updatedArr));
    setTaskInp("");

    console.log("form submited", "input:", taskInp);
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex gap-4 w-full justify-center">
        <input
          onChange={(e)=> setTaskInp(e.target.value)}
          value={taskInp}
          type="text"
          className="border-2 focus:border-blue-400 outline-none py-1.5 px-2.5 rounded-md w-[50%]"
        />
        <input
          type="submit"
          value="add Task"
          className="text-white bg-blue-400 hover:bg-blue-500 active:scale-95 py-1.5 px-2.5 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Inputbar;
