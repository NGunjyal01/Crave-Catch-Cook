import { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BiSolidDish } from "react-icons/bi";
import { Ingredients_IMG_CDN } from '../utils/constants';
import caloriesLogo from "../Calories Logo.png";
import { IoMdAlarm } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import vegLogo from "../Veg Logo.png";
import nonVegLogo from "../Non-Veg Logo.png";
import veganLogo from "../Vegan Logo.png";
import glutenFreeLogo from "../Gluten Free logo.png";
import dairyFreeLogo from "../Dairy Free Logo.png";
import { getRecipeInfo } from '../services/apis';
import { useDispatch, useSelector } from 'react-redux';
import Shimmer from './common/Shimmer';
import { removeRecipeInfo, removeSimilarRecipes } from '../utils/recipeSlice';


const SimilarRecipes = lazy(()=> import('./SimilarRecipes'));

const RecipePage = () => {

    const recipeId = useParams().id;
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();
    const recipeInfo = useSelector(store => store.recipes.recipeInfo);
    // const info = recipeInfo?.nutrition.nutrients.map(name => name.name).join(",");
    // console.log(info);

    useEffect(()=>{
        if(Object.keys(recipeInfo).length===0){
            setLoading(true);
            console.log('loading new page..............................',loading);
            getRecipeInfo(recipeId,dispatch)
            .then(()=>{
                setLoading(false);
                console.log('loading new page..............................',loading);
            });
        }

        return()=>{
            dispatch(removeRecipeInfo());
            dispatch(removeSimilarRecipes());
        }
    },[recipeId]);

    const {
        vegetarain,
        vegan,
        glutenFree,
        dairyFree,
        sourceName,
        pricePerServing,
        extendedIngredients = [],
        title = '',
        servings = 0,
        readyInMinutes = 0,
        sourceUrl = '',
        image = '',
        summary = '',
        analyzedInstructions = [],
        spoonacularSourceUrl = ''
    } = recipeInfo || {}; // Add default empty object

    // Safely access the nutrients array
    const nutrients = recipeInfo?.nutrition?.nutrients || [];
    const steps = analyzedInstructions.length > 0 ? analyzedInstructions[0].steps : [];

    return (
        <>
            {loading ? <Shimmer type={"RecipePage"}/>
            :<div className='grid place-items-center lg:mt-[10%] mt-[30%]'>
                <div className='w-[90%] sm:w-[80%]'>
                    {/* Section 1 */}
                    <h1 className='flex justify-center mb-5 text-2xl lg:text-4xl font-bold'>{title}</h1>
                    <div className='grid grid-cols-12 mt-10 relative'>
                        <img src={image} alt={title+" img"} 
                        className='col-span-full sm:col-span-5 w-full shadow-lg shadow-gray-700 rounded-lg lg:hover:scale-95 transition-transform ease-in-out'/>
                        <div className='col-span-full sm:col-span-7 grid grid-cols-12 sm:ml-40 mt-10 sm:mt-5'>
                            <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <BiSolidDish className='Logos'/>
                                <h1 className='text-sm lg:text-lg'>{servings + " servings"}</h1>
                            </div>
                            <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <img src={caloriesLogo} alt='calories img' className='w-5 lg:w-8 object-contain'/>
                                <h1 className='text-sm lg:text-lg'>126kcal</h1>
                            </div>
                            <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <IoMdAlarm className='Logos'/>
                                <h1 className='hidden lg:block'>{"Prepation Time "+readyInMinutes+"min"}</h1>
                                <h1 className='block lg:hidden text-sm'>{readyInMinutes+"min"}</h1>
                            </div>
                            <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <AiFillDollarCircle className='Logos'/>
                                <h1 className='hidden lg:block'>{"$"+pricePerServing + " per Serving"}</h1>
                                <h1 className='block lg:hidden text-sm'>{"$"+pricePerServing}</h1>
                            </div>
                            <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <img src={vegetarain ? vegLogo : nonVegLogo} className='w-5 lg:w-8 object-contain'/>
                                <h1 className='hidden lg:block'>{vegetarain?"Vegetarain":"Non-Vegetarain"}</h1>
                                <h1 className='block lg:hidden text-sm'>{vegetarain?"Veg":"Non-Veg"}</h1>
                            </div>
                            {vegan && <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <img src={veganLogo} alt='vegan logo' className='w-5 lg:w-8 object-contain'/>
                                <h1 className='text-sm lg:text-lg'>Vegan</h1>
                            </div>}
                            {glutenFree && <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <img src={glutenFreeLogo} alt='gluten free logo' className='w-5 lg:w-8 object-contain'/>
                                <h1 className='text-sm lg:text-lg'>Gluten Free</h1>    
                            </div>}
                            {dairyFree && <div className='col-span-6 flex items-center justify-between bg-gray-100 px-4 w-[90%] h-10 sm:max-h-14 rounded-lg shadow-sm shadow-gray-700'>
                                <img src={dairyFreeLogo} alt='dairy free logo' className='w-5 lg:w-8 object-contain'/>
                                <h1 className='text-sm lg:text-lg'>Dairy Free</h1>
                            </div>}
                        </div>
                    </div>
                    {/* Section 2 */}
                    <div className='flex flex-col mt-10 lg:mt-20'>
                        <p dangerouslySetInnerHTML={{ __html: summary }} className='text-xs lg:text-base'></p>
                        <h1 className='text-xl lg:text-3xl font-semibold lg:mt-10 mb-4'>Ingredients</h1>
                        <div className='grid grid-cols-12 gap-5'>
                            {extendedIngredients.map(ingredient =><div className='col-span-6 lg:col-span-2 flex flex-col items-center mt-4 py-2 bg-gray-100 shadow-sm shadow-gray-700 rounded-lg'>
                                <h1 className='text-xs lg:text-base my-2'>{ingredient.amount +" " +ingredient.unit}</h1>
                                <img src={Ingredients_IMG_CDN+ingredient.image} alt={ingredient.name + " img"} className='w-20 lg:w-28 h-20 lg:h-28 object-contain mix-blend-multiply'/>
                                <h1 className='text-xs lg:text-base my-4'>{ingredient.name}</h1>
                            </div>)}
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className='mt-8 lg:mt-16'>
                        <h1 className='text-lg lg:text-3xl font-semibold mb-4'>{"Analyzed Instructions ( Preparation Time - " + readyInMinutes + "min )"}</h1>
                        <ul className='ml-5 mt-10 list-decimal text-sm lg:text-lg'>
                            {steps.map(step=> <div className='space-y-2 mt-4'>
                                <li>{step.step}</li>
                                {step.ingredients.length!==0 && <h1 className='ml-7'><span className='font-semibold'>Ingredients</span> - {step.ingredients.map(ingredient => ingredient.name).join(", ")}</h1>}
                                {step.equipment.length!==0 && <h1 className='ml-7'><span className='font-semibold'>Equipments</span> - {step.equipment.map(equipment => equipment.name).join(", ")}</h1>}
                            </div>)}
                        </ul>
                    </div>
                    {/* Section 4 */}
                    <div className='mt-8 lg:mt-16'>
                        <h1 className='text-lg lg:text-3xl font-semibold'>Nutritional Information</h1>
                        <div className='mt-10'>
                            {nutrients?.map(nutrient => <div className='grid grid-cols-12 my-3'>
                                <h1 className='col-span-4 lg:col-span-3 text-sm lg:text-base'>{nutrient.name}</h1>
                                <h1 className='col-span-4 lg:col-span-2 text-sm lg:text-base'>{nutrient.amount + " " + nutrient.unit}</h1>
                                <progress value={nutrient.percentOfDailyNeeds} className='col-span-4 lg:col-span-5 mt-1 max-w-28 lg:max-w-full' max={100}/>
                            </div>)}
                        </div>
                    </div>
                    {/* Section 5 */}
                    <div className=' my-10 text-sm lg:text-lg font-semibold'>
                        <h1 className='my-3'>{"Source Name - " + sourceName}</h1>
                        <h1>Source Url - <a href={sourceUrl}>{sourceUrl}</a></h1>
                    </div>
                </div>
                <Suspense fallback={<Shimmer type={"SearchPage"}/>}>
                    <div className='w-[95%]'>
                        <SimilarRecipes recipeId={recipeId}/>
                    </div>
                </Suspense>
            </div>}
        </>
    )
}

export default RecipePage
