import { createSlice } from '@reduxjs/toolkit';

const favRecipes = localStorage.getItem('favRecipes') ? JSON.parse(localStorage.getItem('favRecipes')) : null;

const favRecipesSlice = createSlice({
    name: "favRecipes",
    initialState: favRecipes ? favRecipes : null,
    reducers:{ 
        setFavRecipes: (state,action)=>{
            return action.payload;
        },
        resetFavRecipes: (state,action)=>{
            return null;
        }
    }
})

export const { setFavRecipes,resetFavRecipes } = favRecipesSlice.actions;
export default favRecipesSlice.reducer;
