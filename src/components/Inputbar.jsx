import { useContext, useState } from "react";
import { TaskContext } from "../context/Context";


const Inputbar = () => {
  //using the context and destrc the value object
  let {allTasks, setAllTasks} = useContext(TaskContext);
  
  const [taskInp, setTaskInp] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
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
