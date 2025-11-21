import React, { useContext } from 'react'
import List from './List'
import { MyContext } from '../context/ContextProvider'

const Taskcontainer = () => {

    let {allTasks} = useContext(MyContext)

  return (
    <div className='bg-gray-100 h-full border-2 border-dashed rounded-xl flex flex-col gap-1 p-2'>
        {allTasks?.map((elem)=> {
            return <List key={elem.id} elem={elem}/>
        })}
    </div>
  )
}

export default Taskcontainer