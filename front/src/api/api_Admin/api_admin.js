import axios from 'axios'


 export const fetchContacts =async()=>{
    const {data} = await axios.get(`http://localhost:4000/auth/admin_allusers`);
    return data 
}

