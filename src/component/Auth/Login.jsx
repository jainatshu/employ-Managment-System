import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const submitHandller = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setpassword("")
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
                submitHandller(e)
            }}
            action="" className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400' type="text" placeholder='Please Enter Your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Password'/>
                <button className=' bg-emerald-600 rounded-full py-3 px-5 text-xl  outline-none placeholder:text-white mt-5'>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login

