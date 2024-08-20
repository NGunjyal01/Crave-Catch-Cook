import { createSlice } from '@reduxjs/toolkit';

const recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : null;

const recipeSlice = createSlice({
    name:"recipes",
    initialState:{
        randomRecipes: recipes ? recipes.randomRecipes || [] : [],
        recipeInfo: recipes ? recipes.recipeInfo || {} : {},
        similarRecipes: recipes ? recipes.similarRecipes || [] : [],
    },
    reducers:{
        addRandomRecipes: (state,action)=>{
            state.randomRecipes = action.payload;
        },
        setRecipeInfo: (state,action)=>{
            state.recipeInfo = action.payload;
        },
        removeRecipeInfo: (state,action)=>{
            state.recipeInfo = {};
        },
        setSimilarRecipes : (state,action)=>{
            state.similarRecipes = action.payload;
        },
        removeSimilarRecipes : (state,action)=>{
            state.similarRecipes = [];
        },
    },
});

export const { addRandomRecipes,setRecipeInfo,removeRecipeInfo,addRecipeByDishName,removeRecipeByDishName, setSimilarRecipes, removeSimilarRecipes} = recipeSlice.actions;

export default recipeSlice.reducer;
