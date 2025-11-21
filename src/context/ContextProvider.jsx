import { createContext, useState } from "react";

export let MyContext = createContext();  //step 1(parts) 1. ek global bucket banaya jo kisi bhi component ko data share karega

const MyContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(()=> {   //2. useState inside provider alltasks comes form localstorage if available
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  return (
    <MyContext.Provider value={{ allTasks, setAllTasks }}>
      {children}  
    </MyContext.Provider>
  );

  //3. wraping children in provider so <MyContextProvider> can use these values - Main.jsx
};

export default MyContextProvider;
