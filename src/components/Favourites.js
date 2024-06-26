import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Favourites = () => {

    const user = useSelector(store => store.user.userInfo);
    const favRecipes = useSelector(store => store.favRecipes);

    return !user?(<div className='flex justify-center mx-5 mt-[50%] lg:mt-[20%] lg:text-3xl'>
        <h1>To Save/See Your Favourites Recipes First <Link to={"/authentication"} className='font-bold'>Login/Signup</Link></h1>
        </div> ) : (favRecipes.length===0 ? <div className='flex justify-center mx-5 mt-[50%] lg:mt-[20%] lg:text-3xl font-bold'>
            <h1>No Favourite Recipes</h1>
        </div> : <div className='flex flex-wrap justify-center mt-[25%] lg:mt-[10%]'>
            {favRecipes.map(recipe => <RecipeCard recipe={recipe}/>)}
        </div>)
}

export default Favourites
