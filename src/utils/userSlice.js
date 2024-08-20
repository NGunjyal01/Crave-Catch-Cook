import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const userSlice = createSlice({
    name:"user",
    initialState: {
        userInfo: user,
        apiLimitExceed: false,
    },
    reducers:{
        addUser: (state,action)=>{
            state.userInfo = action.payload;
        },
        removeUser: (state,action)=>{
            state.userInfo = null;
        },
        setApiLimitExceed: (state,action)=>{
            state.apiLimitExceed = action.payload;
        }
    },
});

export const {addUser,removeUser,setApiLimitExceed} = userSlice.actions;
export default userSlice.reducer;