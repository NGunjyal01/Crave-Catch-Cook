import { createSlice } from "@reduxjs/toolkit";

const basic = {searchInput:'',result:[],showResults:false,isResultEmpty:false};

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        dishName:  basic,
        ingredients: basic,
        nutrients: basic,
    },
    reducers: {
        setDishName: (state,action)=>{
            state.dishName = {...state.dishName,...action.payload};
        },
        setIngredients: (state,action)=>{
            state.ingredients = {...state.ingredients,...action.payload};
        },
        setNutrients: (state,action)=>{
            state.nutrients = {...state.nutrients,...action.payload};
        }
    }
});

export const { setDishName, setIngredients, setNutrients } = searchSlice.actions;
export default searchSlice.reducer;