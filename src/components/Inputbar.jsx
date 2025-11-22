import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/Context";
import { nanoid } from "nanoid";

const Inputbar = () => {
  // Accessing context values (tasks array + updater function)
  // We destructure the object passed from TaskContextProvider
  let { allTasks, setAllTasks, editedId, setEditedId } =
    useContext(TaskContext);

  // Local input state to control the input field
  const [taskInp, setTaskInp] = useState("");

  useEffect(() => {
    if (editedId) {  //if editedId has a value we are editing existing task
      let findUpdatedValue = allTasks.find((val) => val.id === editedId) || ""; //find the task having same id as editedId
      setTaskInp(findUpdatedValue.task); //put that task text into the input field
    }
  }, [editedId]); //runs everytime edited id changes

  const handleSubmit = (e) => {
    e.preventDefault();

    //cast 1 : input is blank
    if (taskInp === "") {
      console.log("empty form not submited");
      return;
    }

    if(editedId) {
      //find the task to be updated 
      let updatedTask = allTasks.find((elem) => elem.id === editedId);

      //update only the text of the task
      updatedTask.task = taskInp;

      //copy arr so react detects state change
      let upArr = [...allTasks];

      //update context
      setAllTasks(upArr);

      //update localstorage 
      localStorage.setItem("tasks", JSON.stringify(upArr));

      //reset input field and edited state
      setTaskInp("");
      setEditedId(null);
      return; //exist the function -> prevents adding new task
    }

    // Create a NEW updated array of tasks
    // We copy old tasks (...allTasks)
    // Then add one new task object (id + task text)
    let updatedArr = [
      ...allTasks,
      {
        id: nanoid(),
        task: taskInp,
      },
    ];

    setAllTasks(updatedArr); // Update the context state (this re-renders UI)

    // Save the updated tasks in localStorage to persist across refreshes
    localStorage.setItem("tasks", JSON.stringify(updatedArr));
    setTaskInp("");

    console.log("form submited", "input:", taskInp);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 w-full justify-center"
      >
        <input
          onChange={(e) => setTaskInp(e.target.value)}
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
