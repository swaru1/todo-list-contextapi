//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContextProvider from './context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <MyContextProvider>
        <App/>
    </MyContextProvider>
)


//step-2 every component inside App has access to {alltasks, setAllTasks, editedId, setEditedId} avoiding prop drilling