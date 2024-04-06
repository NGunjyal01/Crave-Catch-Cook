import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import recipeReducer from "./recipeSlice";
import favRecipesReducer from "./favRecipesSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        recipes: recipeReducer,
        favRecipes: favRecipesReducer,
    },
});

export default appStore;