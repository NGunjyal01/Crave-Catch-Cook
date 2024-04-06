import { createSlice } from '@reduxjs/toolkit';

const favRecipesSlice = createSlice({
    name: "favRecipes",
    initialState: [],
    reducers:{ 
        addFavRecipes: (state,action)=>{
            return action.payload;
        },
    }
})

export const {addFavRecipes} = favRecipesSlice.actions;
export default favRecipesSlice.reducer;
