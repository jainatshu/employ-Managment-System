import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';

const TaskList = ({data}) => {
    
  return (
    <div id='tasklist' className='h-[55%] flex items-center overflow-x-auto justify-start flex-nowrap gap-5 w-full py-5 mt-10'>
        
        {data.tasks.map((task,index)=>{
            
            if(task.active){
                return <AcceptTask key={index} task={task}/>
            }
            if(task.newTask){
                return <NewTask key={index} task={task}/>
            }
            if(task.failed){
                return <FailedTask key={index} task={task}/>
            }
            if(task.completed){
                return <CompleteTask key={index} task={task} />
            }
        
            
        })}
    </div>
  )
}

export default TaskList


{/* <div className='h-full shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{data.tasks[0].date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.tasks[0].title}</h2>
            
            <p className='text-sm mt-2'>
            {data.tasks[0].description}
            </p>
        </div>
        <div className='h-full shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{data.tasks[1].date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.tasks[1].title}</h2>
            
            <p className='text-sm mt-2'>
            {data.tasks[1].description}
            </p>
        </div>
        <div className='h-full shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{data.tasks[2].date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.tasks[2].title}</h2>
            
            <p className='text-sm mt-2'>
            {data.tasks[2].description}
            </p>
        </div> */}