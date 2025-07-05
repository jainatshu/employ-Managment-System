import React, { useState,useEffect, useContext } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/employeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);


  const [authData,setAuthData] = useContext(AuthContext);
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  },[])
  

  const handleLogin = (email,password)=>{

    

    if(authData&&authData.admin.admin.email===email&&authData.admin.admin.password===password){
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}));
        setUser('admin');
        setLoggedInUserData(authData.admin.admin);
        
    }
    
    else if(authData){
      const employee = authData.employees.employees.find((e)=>email === e.email&&password === e.password);
      if(employee){
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee',data : employee}))
        setUser('employee');
        setLoggedInUserData(employee);
        
      }
      else{
        alert('invalid credentials')
      }
      
    }
    else{
      alert('authData in not avalible')
    }
  }
  

 
  return (
    <>
    {!user? <Login  handleLogin = {handleLogin} /> : ''}
    {user=='admin'? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : ( user == 'employee' ? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> : null ) }
    

    </>
  )
}

export default App