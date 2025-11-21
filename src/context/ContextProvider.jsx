import { createContext, useState } from "react";

export let MyContext = createContext();  //step 1(parts) 1. ek global bucket banaya jo kisi bhi component ko data share karega

const MyContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(()=> {   //2. useState inside provider alltasks comes form localstorage if available
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [editedId, setEditedId] = useState(null); //created state for edited id and passing it to childreds

  return (
    <MyContext.Provider value={{ allTasks, setAllTasks, editedId, setEditedId }}>
      {children}  
    </MyContext.Provider>
  );

  //3. wraping children in provider so <MyContextProvider> can use these values - Main.jsx
};

export default MyContextProvider;
