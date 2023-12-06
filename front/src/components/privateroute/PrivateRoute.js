import React,{useEffect} from 'react'
import {fetchaccount} from '../../api/authapi'
import {useDispatch,useSelector} from 'react-redux'
import {setAccount} from '../../store/authSlice'
import { useNavigate } from 'react-router';
import Admin from '../admin/Admin';
import FrontPage from '../frontpage/FrontPage';

const PrivateRoute = () => {

const hekelijey = useSelector(state=>state.auth)
console.log('user logged in =>hekelijey', hekelijey)

const dispatch = useDispatch()
const navigate = useNavigate()


 const getAcount=async()=>{
 const data = await fetchaccount()
 console.log('data login =>', data)
dispatch(setAccount(data))
 }

 useEffect(()=>{
  getAcount()
 },[])

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}

const token = localStorage.getItem('token')

  return (
    <div>
{ token ? (<>
{ hekelijey.role === "user" ?  <FrontPage logout={logout}  />  :<Admin   logout={logout} />  
}</>):(<h1>hhh</h1>)}
</div>
  )
} 

export default PrivateRoute
