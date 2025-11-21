import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/ContextProvider";
import { nanoid } from "nanoid";

const Inputbar = () => {

  let {allTasks, setAllTasks, editedId, setEditedId} = useContext(MyContext) //1. input gets access to global state
 
  const [taskInp, setTaskInp] = useState('');

  useEffect(()=> {
    if(editedId) {
      let findUpdatedValue = allTasks.find((val) => val.id === editedId) || "";
      setTaskInp(findUpdatedValue.task);
    }
  },[editedId]);


  const handleSubmit = (e)=> {
    e.preventDefault();

    if (taskInp === "") {
      return;  //input is blank
    }

    if(editedId) {
      let updatedTask = allTasks.find((elem)=> elem.id === editedId);
      updatedTask.task = taskInp;

      let upArr = [...allTasks];
      setAllTasks(upArr);
      localStorage.setItem("tasks", JSON.stringify(upArr));
      setTaskInp("");
      setEditedId(null);
      return;
    }

    let updatedArr = [
      ...allTasks,
      {
        id: nanoid(),
        task: taskInp,
      }
    ];

    setAllTasks(updatedArr); //passing task to localstorage
    localStorage.setItem("tasks", JSON.stringify(updatedArr));
    setTaskInp("");
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}  className="flex gap-4 w-full justify-center">
        <input
            value={taskInp}
            onChange={(e)=> setTaskInp(e.target.value)}
          type="text"
          className="border-2 focus:border-blue-400 outline-none py-1.5 px-2.5 rounded-md w-[50%]"
        />
        {editedId ? (
          <input
          type="submit"
          value="update"
          className="text-white bg-blue-400 hover:bg-blue-500 active:scale-95 py-1.5 px-2.5 rounded-md cursor-pointer"
        />
        ) : (
          <input
          type="submit"
          value="add Task"
          className="text-white bg-blue-400 hover:bg-blue-500 active:scale-95 py-1.5 px-2.5 rounded-md cursor-pointer"
        />
        )}
      </form>
    </div>
  );

  //step-4 input component logic


};

export default Inputbar;
