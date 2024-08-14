import { createSlice } from '@reduxjs/toolkit';

const favRecipes = localStorage.getItem('favRecipes') ? JSON.parse(localStorage.getItem('favRecipes')) : null;

const favRecipesSlice = createSlice({
    name: "favRecipes",
    initialState: favRecipes ? favRecipes : [],
    reducers:{ 
        addFavRecipes: (state,action)=>{
            return action.payload;
        },
    }
})

export const {addFavRecipes} = favRecipesSlice.actions;
export default favRecipesSlice.reducer;
