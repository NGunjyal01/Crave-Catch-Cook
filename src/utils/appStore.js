import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import recipeReducer from "./recipeSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        recipes: recipeReducer,
    },
});

export default appStore;