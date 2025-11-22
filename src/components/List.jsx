import { useContext } from "react";
import { TaskContext } from "../context/Context";

const List = ({elem}) => {  

  let {allTasks, setAllTasks, setEditedId } = useContext(TaskContext)

  const handleDelete = ()=> {
    let filterArr = allTasks.filter((val) => val.id !== elem.id);
    localStorage.setItem("tasks", JSON.stringify(filterArr));
    setAllTasks(filterArr);
  }

  const handleUpdate = () => {
    setEditedId(elem.id);
  }


  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 flex gap-6 items-center justify-between">
      <p className="w-full p-2">
        {elem.task}
      </p>
      <div className="controls flex gap-2 *:rounded-md">
        <button onClick={handleUpdate}  className="py-1.5 px-2.5 bg-green-300 text-white font-semibold cursor-pointer active:scale-95 hover:bg-green-400">
          Update
        </button>
        <button onClick={handleDelete}  className="py-1.5 px-2.5 bg-red-500 text-white font-semibold cursor-pointer active:scale-95 hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
