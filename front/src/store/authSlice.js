import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        name:"auth account",
        lastname:" authredux",
        email:"auth@gmail.com",
        password:" authredux",
        role:"user"
    },
    reducers:{
        setAccount:(state,action)=>{
            return action.payload
        }
    }
})


export const {setAccount} = authSlice.actions

export default authSlice.reducer