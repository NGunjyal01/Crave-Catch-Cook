import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
    name:"recipes",
    initialState:{
        randomRecipes: null,
        dishName: null,
        ingredients: null,
        nutrients: null,
    },
    reducers:{
        addRandomRecipes: (state,action)=>{
            state.randomRecipes = action.payload;
        },
        addRecipeByDishName: (state,action) =>{
            state.dishName = action.payload;  
        },
        removeRecipeByDishName: (state,action) =>{
            state.dishName = null;
        },
        addRecipeByIngredients: (state,action)=>{
            state.ingredients = action.payload;
        },
        removeRecipeByIngredients: (state,action)=>{
            state.ingredients = null;
        },
        addRecipeByNutrients: (state,action)=>{
            state.nutrients = action.payload;
        },
        removeRecipeByNutrients: (state)=>{
            state.nutrients = null;
        },
    },
});

export const { addRandomRecipes,addRecipeByDishName,removeRecipeByDishName,addRecipeByIngredients,removeRecipeByIngredients,addRecipeByNutrients,removeRecipeByNutrients} = recipeSlice.actions;

export default recipeSlice.reducer;
