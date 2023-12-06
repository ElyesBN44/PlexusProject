import React,{useState} from 'react'
import './Register1.css'
import { useNavigate} from 'react-router-dom'
import {postauthUser} from '../../api/authapi'

const Register = () => {

  const [name,setName]=useState('')
  const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

const [phone,setPhone]=useState()


  const navigate = useNavigate()
  const Login =async(value)=>{

try{
  console.log(('dfghjk'))
  await postauthUser(value)
    navigate('/Login')
  
}catch(err){
  console.log(err)
}
  }
  
  return (

    <div className='bodyRegister'>
      <div className="containerR">
  <div className="top" />
  <div className="bottom" />
  <div className="center">
    <h2>Please Register</h2> 
    <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    <input type="text" placeholder="lastName" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
    <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    
    <h2>&nbsp;</h2>

    <button onClick={()=>navigate('/login')}   >go  login</button>
    <button  type="button" onClick={()=>Login({name,lastname,phone,email,password})}>Register</button> 
  </div>
</div>
    </div>
  )

  }
export default Register
