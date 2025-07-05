import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [authData,setAuthData] = useContext(AuthContext);
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
        <div className='bg-amber-900 mb-2 py-2 px-4 flex justify-between rounded gap-2' >
            <h2 className='text-lg font-medium w-1/5  rounded-sm px-1'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 bg-green-600 rounded-sm px-1'>Active Task</h3>
            <h5 className='text-lg font-medium w-1/5 bg-blue-600 rounded-sm px-1'>New Task</h5>
            <h5 className='text-lg font-medium w-1/5 bg-yellow-600 rounded-sm px-1'>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5 bg-purple-600 rounded-sm px-1'>Failed Task</h5>
        </div>
        <div className=''>
            {authData.employees.employees.map((data,idx)=>{
                return <div key={idx} className='border-2  bg-amer-900 mb-2 py-2 px-4 flex justify-between rounded gap-2 ' >
                            <h2 className='text-lg font-medium w-1/5  rounded-sm px-1'>{data.firstname}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-green-400 rounded-sm px-1'>{data.taskSummary.active}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-blue-400 rounded-sm px-1'>{data.taskSummary.newTask}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-400 rounded-sm px-1'>{data.taskSummary.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-purple-400 rounded-sm px-1'>{data.taskSummary.failed}</h5>
                        </div>
            })}
        </div>
        

    </div>
  )
}

export default AllTask