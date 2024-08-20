import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import recipeReducer from "./recipeSlice";
import favRecipesReducer from "./favRecipesSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        recipes: recipeReducer,
        search: searchReducer,
        favRecipes: favRecipesReducer,
    },
});

export default appStore;