import React, { useEffect, useState } from 'react'
import ViewCardUsers_Admin from './ViewCardUsers_Admin'
import { fetchContacts } from '../../../../api/api_Admin/api_admin'

const ViewUsers_Admin = () => {

  const [viewList,setViewList]=useState()

  const getallusers=async()=>{
    try{
      const data = await fetchContacts()
console.log('data.Contacts',data.Contacts)
      setViewList(data.Contacts)
    }catch(err){
      console.log(err)
    }
  }

useEffect(()=>{
getallusers()
},[])
console.log('use',viewList)

  return (
    
    <div>

      {
        viewList.map((el)=><ViewCardUsers_Admin  el={el}   />)
      }
      
    </div>
  )
}

export default ViewUsers_Admin

