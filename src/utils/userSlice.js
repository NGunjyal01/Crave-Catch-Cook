import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState: {
        userInfo: null,
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