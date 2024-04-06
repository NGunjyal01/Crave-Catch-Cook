import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BiSolidDish } from "react-icons/bi";
import { API_KEY, Ingredients_IMG_CDN } from '../utils/constants';
import caloriesLogo from "../Calories Logo.png";
import { IoMdAlarm } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import vegLogo from "../Veg Logo.png";
import nonVegLogo from "../Non-Veg Logo.png";
import veganLogo from "../Vegan Logo.png";
import glutenFreeLogo from "../Gluten Free logo.png";
import dairyFreeLogo from "../Dairy Free Logo.png";
import SimilarRecipes from './SimilarRecipes';

const RecipePage = () => {

    const recipeId = useParams().id;
    const [recipeInfo,setRecipeInfo] = useState(null);
    const info = recipeInfo1.nutrition.nutrients.map(name => name.name).join(",");
    console.log(info);
    const getRecipeInformation = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey="+ API_KEY + "&includeNutrition=true");
        const json = await data.json();
        setRecipeInfo(json);
    }

    useEffect(()=>{
        getRecipeInformation();
    },[recipeId]);
    if(!recipeInfo) return null;
    const {vegetarain,vegan,glutenFree,dairyFree,sourceName,pricePerServing,extendedIngredients,title,servings,readyInMinutes,sourceUrl,image,nutrition,summary,analyzedInstructions,spoonacularSourceUrl} = recipeInfo;
    const {nutrients} = nutrition;
    console.log(nutrients);
    const steps = analyzedInstructions[0].steps;

    return (
        <div className='px-5 lg:px-10 lg:mt-[10%] mt-[30%]'>
            {/* Section 1 */}
            <h1 className='flex justify-center mb-5 text-2xl lg:text-4xl font-bold'>{title}</h1>
            <div className='flex flex-col lg:flex-row mt-10'>
                <img src={image} alt={title+" img"} className='ml-5 lg:ml-40 w-[90%] lg:w-[42%] shadow-lg shadow-gray-700 rounded-lg lg:hover:scale-95 transition-transform ease-in-out'/>
                <div className='grid grid-cols-12 ml-5 lg:ml-14 lg:max-w-[38rem] mt-4 lg:mt-0'>
                    <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <BiSolidDish className='Logos mt-1'/>
                        <h1 className='text-sm lg:text-lg lg:mt-1'>{servings + " servings"}</h1>
                    </div>
                    <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={caloriesLogo} alt='calories img' className='w-5 lg:w-10 object-contain'/>
                        <h1 className='text-sm lg:text-lg mt-1'>126kcal</h1>
                    </div>
                    <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <IoMdAlarm className='Logos mt-1'/>
                        <h1 className='hidden lg:block mt-1'>{"Prepation Time "+readyInMinutes+"min"}</h1>
                        <h1 className='block lg:hidden text-sm mt-1'>{readyInMinutes+"min"}</h1>
                    </div>
                    <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <AiFillDollarCircle className='Logos mt-1'/>
                        <h1 className='hidden lg:block mt-1'>{"$"+pricePerServing + " per Serving"}</h1>
                        <h1 className='block lg:hidden text-sm'>{"$"+pricePerServing}</h1>
                    </div>
                    <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={vegetarain ? vegLogo : nonVegLogo} className='w-5 lg:w-10 object-contain'/>
                        <h1 className='hidden lg:block mt-1'>{vegetarain?"Vegetarain":"Non-Vegetarain"}</h1>
                        <h1 className='block lg:hidden text-sm mt-1'>{vegetarain?"Veg":"Non-Veg"}</h1>
                    </div>
                    {vegan && <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={veganLogo} alt='vegan logo' className='w-5 lg:w-10 object-contain'/>
                        <h1 className='text-sm lg:text-lg lg:mt-1'>Vegan</h1>
                    </div>}
                    {glutenFree && <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={glutenFreeLogo} alt='gluten free logo' className='w-5 lg:w-10 object-contain'/>
                        <h1 className='text-sm lg:text-lg lg:mt-1'>Gluten Free</h1>    
                    </div>}
                    {dairyFree && <div className='col-span-6 flex justify-between bg-gray-100 mr-4 mt-5 px-4 lg:px-7 py-1 lg:py-2 max-h-14 lg:w-72 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={dairyFreeLogo} alt='dairy free logo' className='w-5 lg:w-10 object-contain'/>
                        <h1 className='text-sm lg:text-lg lg:mt-1'>Dairy Free</h1>
                    </div>}
                </div>
            </div>
            {/* Section 2 */}
            <div className='lg:ml-[10%] mt-10 lg:mt-20'>
                <p dangerouslySetInnerHTML={{ __html: summary }} className='lg:w-[90%] text-xs lg:text-base'></p>
                <h1 className='text-xl lg:text-3xl font-semibold mt-5 lg:mt-10 mb-4'>Ingredients</h1>
                <div className='grid grid-cols-12'>
                    {extendedIngredients.map(ingredient =><div className='col-span-6 lg:col-span-2 flex flex-col items-center mx-3 mt-4 py-2 bg-gray-100 shadow-sm shadow-gray-700 rounded-lg'>
                        <h1 className='text-xs lg:text-base my-2'>{ingredient.amount +" " +ingredient.unit}</h1>
                        <img src={Ingredients_IMG_CDN+ingredient.image} alt={ingredient.name + " img"} className='w-20 lg:w-28 h-20 lg:h-28 object-contain mix-blend-multiply'/>
                        <h1 className='text-xs lg:text-base my-4'>{ingredient.name}</h1>
                    </div>)}
                </div>
            </div>
            {/* Section 3 */}
            <div className='ml-2 lg:ml-[10%] mt-8 lg:mt-16 lg:w-[85%]'>
                <h1 className='text-lg lg:text-3xl font-semibold mb-4'>{"Analyzed Instructions ( Preparation Time - " + readyInMinutes + "min )"}</h1>
                <ul className='list-decimal text-sm lg:text-lg'>
                    {steps.map(step=> <div className='space-y-2 mt-4'>
                        <li>{step.step}</li>
                        {step.ingredients.length!==0 && <h1 className='ml-7'><span className='font-semibold'>Ingredients</span> - {step.ingredients.map(ingredient => ingredient.name).join(", ")}</h1>}
                        {step.equipment.length!==0 && <h1 className='ml-7'><span className='font-semibold'>Equipments</span> - {step.equipment.map(equipment => equipment.name).join(", ")}</h1>}
                    </div>)}
                </ul>
            </div>
            {/* Section 4 */}
            <div className=' lg:ml-[10%] mt-8 lg:mt-16'>
                <h1 className='text-lg lg:text-3xl font-semibold'>Nutritional Information</h1>
                <div className='mt-4 lg:ml-2'>
                    {nutrients.map(nutrient => <div className='grid grid-cols-12 my-3'>
                        <h1 className='col-span-4 lg:col-span-3 text-sm lg:text-base'>{nutrient.name}</h1>
                        <h1 className='col-span-4 lg:col-span-2 text-sm lg:text-base'>{nutrient.amount + " " + nutrient.unit}</h1>
                        <progress value={nutrient.percentOfDailyNeeds} className='col-span-4 lg:col-span-5 mt-1 max-w-28 lg:max-w-full' max={100}/>
                    </div>)}
                </div>
            </div>
            {/* Section 5 */}
            <div className='lg:ml-[10%] my-10 text-sm lg:text-lg font-semibold'>
                <h1 className='my-3'>{"Source Name - " + sourceName}</h1>
                <h1>Source Url - <a href={sourceUrl}>{sourceUrl}</a></h1>
            </div>
            <SimilarRecipes recipeId={recipeId}/>
        </div>
    )
}

export default RecipePage
