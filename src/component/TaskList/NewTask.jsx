import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className='h-full shrink-0 w-[300px] p-5 bg-blue-600 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
            <h4 className='text-sm'>{task.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
        <p className='text-sm mt-2'>
        {task.description}
        </p>
        <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 w-full'>Accept Task</button>
            
        </div>
    </div>
  )
}

export default NewTask