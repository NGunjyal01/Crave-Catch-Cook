import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Favourites = () => {

    const user = useSelector(store => store.user.userInfo);
    const favRecipes = useSelector(store => store.favRecipes);

    return !user?(<div className='flex justify-center mx-5 mt-[50%] lg:mt-[20%] lg:text-3xl min-h-screen'>
        <h1>To Save/See Your Favourites Recipes First <Link to={"/login"} className='font-bold'>Login/Signup</Link></h1>
        </div> ) : (favRecipes.length===0 ? <div className='flex justify-center mx-5 mt-[50%] lg:mt-[20%] lg:text-3xl font-bold min-h-screen'>
            <h1>No Favourite Recipes</h1>
        </div> 
        : <div className='w-full mt-[25%] lg:mt-[10%]'>
            <h1 className='text-3xl font-bold ml-[9%]'>Favorite Recipes</h1>
            <div className='grid grid-cols-3 w-[85%] mx-auto mt-10'>
                {favRecipes.map(recipe => <div className='col-span-1'><RecipeCard recipe={JSON.parse(recipe.recipeInfo)}/></div>)}
            </div>
        </div>)
}

export default Favourites
