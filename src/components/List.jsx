import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";


const List = ({elem}) => {  

  let {allTasks, setAllTasks} = useContext(MyContext)
  
  const handleDelete = () => {
    let filteredArr = allTasks.filter((val)=> val.id !== elem.id)
    localStorage.setItem("tasks", JSON.stringify(filteredArr))
    setAllTasks(filteredArr)
  }

  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 flex gap-6 items-center justify-between">
      <p className="w-full p-2">
        {elem.task}
      </p>
      <div className="controls flex gap-2 *:rounded-md">
        <button className="py-1.5 px-2.5 bg-green-300 text-white font-semibold cursor-pointer active:scale-95 hover:bg-green-400">
          update
        </button>
        <button onClick={handleDelete} className="py-1.5 px-2.5 bg-red-500 text-white font-semibold cursor-pointer active:scale-95 hover:bg-red-600">
          remove
        </button>
      </div>
    </div>
  );
};

export default List;
