import React,{useState} from 'react'
import './login.css'
import {useNavigate} from 'react-router';
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate()

    
 
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')


  const handelLogin=async(values)=>{
    try{
      const res=await axios.post('http://localhost:4000/auth/login',values)
      console.log('res token login',res.data.token)
      await localStorage.setItem('token =>---------->',res.data.token)
      navigate('/privateroute')
      console.log('/privateroute')
    }catch(err){

      console.log(err)
    }
  }

  return (
    <div className='bodyLogin'>
    <div className="containerL">
<div className="top" />
<div className="bottom" />
<div className="center">
  <h2>Please Login</h2>
  <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> 
  <h2>&nbsp;</h2>
  <button onClick={()=>navigate('/')} type='button'> Go back to register </button>
  <button onClick={()=>handelLogin({email,password})} type='button'>log in</button> 
</div>
</div>
</div>
  )
}

export default Login
