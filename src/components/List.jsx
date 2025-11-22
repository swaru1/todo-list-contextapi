
const List = () => {  



  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 flex gap-6 items-center justify-between">
      <p className="w-full p-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi.
      </p>
      <div className="controls flex gap-2 *:rounded-md">
        <button  className="py-1.5 px-2.5 bg-green-300 text-white font-semibold cursor-pointer active:scale-95 hover:bg-green-400">
          Update
        </button>
        <button  className="py-1.5 px-2.5 bg-red-500 text-white font-semibold cursor-pointer active:scale-95 hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
