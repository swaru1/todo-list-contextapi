import { useContext, useState } from "react";
import { MyContext } from "../context/ContextProvider";
import { nanoid } from "nanoid";

const Inputbar = () => {

  let {allTasks, setAllTasks} = useContext(MyContext) //1. input gets access to global state
 
  const [taskInp, setTaskInp] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

    if (taskInp === "") {
      return;  //input is blank
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
        <input
          type="submit"
          value="add Task"
          className="text-white bg-blue-400 hover:bg-blue-500 active:scale-95 py-1.5 px-2.5 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );

  //step-4 input component logic


};

export default Inputbar;
