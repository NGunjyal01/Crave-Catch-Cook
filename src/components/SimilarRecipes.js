import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarRecipes } from "../services/apis";

const SimilarRecipes = ({ recipeId }) => {

    const similarRecipes = useSelector(store => store.recipes.similarRecipes);
    const [isResultEmpty,setIsResultEmpty] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetch = async()=>{
            try{
                const result = await getSimilarRecipes(recipeId,dispatch);
                if(!result){
                    setIsResultEmpty(true);
                }
            }
            catch(error){
                console.log("ERROR DURING SEARCH ITEMS BY DISH NAME...............",error);
            }
        }
        fetch();
    },[recipeId]);
    

    return (
        <>
            {!isResultEmpty && <div className="">
                <h1 className='font-bold text-3xl mt-14 ml-[5%]'>Similar Recipes</h1> 
                <div className="grid grid-cols-3 mt-5">
                    {similarRecipes.map(recipeInfo => <div className="col-span-1">
                        <RecipeCard recipe={recipeInfo}/>
                    </div>)}
                </div>
            </div>}
        </>
    )
}

export default SimilarRecipes
