import { createSlice } from '@reduxjs/toolkit';

const recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : null;

const recipeSlice = createSlice({
    name:"recipes",
    initialState:{
        randomRecipes: recipes ? recipes.randomRecipes ? recipes.randomRecipes : [] : [],
        dishName: recipes ? recipes.dishName ? recipes.dishName : [] : [],
        ingredients: recipes ? recipes.ingredients ? recipes.ingredients : [] : [],
        nutrients: recipes ? recipes.nutrients ? recipes.nutrients : [] : [],
    },
    reducers:{
        addRandomRecipes: (state,action)=>{
            state.randomRecipes = action.payload;
        },
        addRecipeByDishName: (state,action) =>{
            state.dishName = action.payload;  
        },
        removeRecipeByDishName: (state,action) =>{
            state.dishName = [];
        },
        addRecipeByIngredients: (state,action)=>{
            state.ingredients = action.payload;
        },
        removeRecipeByIngredients: (state,action)=>{
            state.ingredients = [];
        },
        addRecipeByNutrients: (state,action)=>{
            state.nutrients = action.payload;
        },
        removeRecipeByNutrients: (state)=>{
            state.nutrients = [];
        },
    },
});

export const { addRandomRecipes,addRecipeByDishName,removeRecipeByDishName,addRecipeByIngredients,removeRecipeByIngredients,addRecipeByNutrients,removeRecipeByNutrients} = recipeSlice.actions;

export default recipeSlice.reducer;
