import React from "react";
import Inputbar from "./components/Inputbar";
import Taskcontainer from "./components/Taskcontainer";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-200 flex flex-col gap-4 justify-center items-center">
      <h1 className="bg-gray-300 px-6 py-1.5 rounded-lg text-2xl font-semibold border-2">Todo-list</h1>
      <div className="h-[70%] w-[60%] bg-white p-3 flex flex-col gap-3 rounded-lg">
        <Inputbar />
        <Taskcontainer />
      </div>
    </div>
  );

};

export default App;
