import React from 'react'

const Header = (props) => {
     const logOutUser = ()=>{
        localStorage.setItem('loggedInUser','');
        props.changeUser('')
     }
    
  return (
    <div className='flex items-end justify-between' >
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm' onClick={logOutUser}>Log out</button>
    </div>
  )
}

export default Header