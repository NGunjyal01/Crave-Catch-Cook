import { useState } from 'react';
import {API_KEY} from "../utils/constants";
import toast from 'react-hot-toast';
import RecipeCard from './RecipeCard';
import DeleteLogo from "../Delete Logo.png";
import Shimmer from './Shimmer';

const Nutrients = () => {

    const [allNutrients,setAllNutrients] = useState([{name:"Carbs",isVisible:false,minVal:null,maxVal:null},
    {name:"Protein",isVisible:false,minVal:null,maxVal:null},
    {name:"Calories",isVisible:false,minVal:null,maxVal:null},
    {name:"Fat",isVisible:false,minVal:null,maxVal:null},
    {name:"Sugar",isVisible:false,minVal:null,maxVal:null},
    {name:"Fiber",isVisible:false,minVal:null,maxVal:null},
    {name:"Alcohol",isVisible:false,minVal:null,maxVal:null},
    {name:"Caffeine",isVisible:false,minVal:null,maxVal:null},
    {name:"Copper",isVisible:false,minVal:null,maxVal:null},
    {name:"Calcium",isVisible:false,minVal:null,maxVal:null},
    {name:"SaturatedFat",isVisible:false,minVal:null,maxVal:null},
    {name:"Fluoride",isVisible:false,minVal:null,maxVal:null},
    {name:"Cholesterol",isVisible:false,minVal:null,maxVal:null},
    {name:"Sodium",isVisible:false,minVal:null,maxVal:null},
    {name:"Selenium",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminA",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminB1",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminB2",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminB3",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminB5",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminB6",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminB12",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminC",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminD",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminE",isVisible:false,minVal:null,maxVal:null},
    {name:"VitaminK",isVisible:false,minVal:null,maxVal:null},
    {name:"Phosphorus",isVisible:false,minVal:null,maxVal:null},
    {name:"Potassium",isVisible:false,minVal:null,maxVal:null},
    {name:"Manganese",isVisible:false,minVal:null,maxVal:null},
    {name:"Magnesium",isVisible:false,minVal:null,maxVal:null},
    {name:"Iodine",isVisible:false,minVal:null,maxVal:null},
    {name:"Zinc",isVisible:false,minVal:null,maxVal:null},
    {name:"Iron",isVisible:false,minVal:null,maxVal:null},
    {name:"Folate",isVisible:false,minVal:null,maxVal:null},
    {name:"FolicAcid",isVisible:false,minVal:null,maxVal:null}]);

    const [addBtn,setAddBtn] = useState(false);
    const [removeBtn,setRemoveBtn] = useState(false);
    const [recipesInfo,setRecipesInfo] = useState(null);
    const [loading,setLoading] = useState(null);

    const handleAddBtn = ()=>{
        setAddBtn(!addBtn);
        setRemoveBtn(false);
    }

    const handleRemoveBtn = ()=>{
        setRemoveBtn(!removeBtn);
        setAddBtn(false);
    }

    const handleAddNutrient = (name)=>{
        const updatedAllNutrients = allNutrients.map(nutrient => {
            if (nutrient.name === name) {
                if(nutrient.isVisible) {
                    toast.error("Already Added");
                    return nutrient;
                }
                else return { ...nutrient, isVisible: true }; 
            } else {
                return nutrient;
            }
        });
        setAllNutrients(updatedAllNutrients);
    }

    const handleRemoveNutrient = (name)=>{
        const updatedAllNutrients = allNutrients.map(nutrient => {
            if (nutrient.name === name) {
                return { ...nutrient, isVisible: false }; 
            } else {
                return nutrient;
            }
        });
        setAllNutrients(updatedAllNutrients);
    }

    const handleMinValChange = (value,name)=>{
        const updatedAllNutrients = allNutrients.map(nutrient => {
            if (nutrient.name === name) {
                return { ...nutrient, minVal: value }; 
            } else {
                return nutrient;
            }
        });
        setAllNutrients(updatedAllNutrients);
    }

    const handleMaxValChange = (value,name)=>{
        const updatedAllNutrients = allNutrients.map(nutrient => {
            if (nutrient.name === name) {
                return { ...nutrient, maxVal: value }; 
            } else {
                return nutrient;
            }
        });
        setAllNutrients(updatedAllNutrients);
    }

    const getRecipesIdByNutrients = async(searchInput)=>{
        setLoading(true);
        const data = await fetch("https://api.spoonacular.com/recipes/findByNutrients?apiKey="+ API_KEY+searchInput);
        const json = await data.json();
        console.log(json);
        getRecipesInfo(json.map(recipe => recipe.id).join(","));
    }

    const getRecipesInfo = async(searchInput)=>{
        const data = await fetch("https://api.spoonacular.com/recipes/informationBulk?apiKey="+ API_KEY +"&ids="+searchInput+"&includeNutrition=true");
        const json = await data.json();
        setRecipesInfo(json);
        console.log(json);
        setLoading(false);
    }


    const handleSearch = ()=>{  
        let searchInput ="";
        let isAnyNutrientVisible = false;
        let isAnyInfoEmpty = false;
        let isMaxLessThanMin = false;
        allNutrients.map(nutrient =>{
            if(nutrient.isVisible){
                isAnyNutrientVisible=true;
                if(!nutrient.minVal || !nutrient.maxVal){
                    isAnyInfoEmpty =  true;
                    return null;
                }
                else if(nutrient.minVal > nutrient.maxVal){
                    isMaxLessThanMin = true;
                    return null;
                }
                else
                    searchInput+="&min"+nutrient.name+"="+nutrient.minVal+"&max"+nutrient.name+"="+nutrient.maxVal;
            }
            return null;
        });
        if(searchInput==="" && !isAnyNutrientVisible)
            return toast.error("Atleast Provide One Nutrient Info");
        else if(isAnyInfoEmpty)
            return toast.error("Fill All Info");
        // else if(isMaxLessThanMin)
        //     return toast.error("Min Value Can't be greater than Max Value");
        else
        getRecipesIdByNutrients(searchInput);
    };

    const handleClearAll = ()=>{
        setAllNutrients(allNutrients.map(nutrient=>({...nutrient,minVal:null,maxVal:null})))
    }
    
    return (
        <div className='mt-10'>
            <div className='flex justify-center space-x-10 mt-16 mb-8'>
                <h1 className='text-xl font-bold'>Provide The Range of Nutrients you want ( Per Serving )</h1>
                <div>
                    <button className='bg-[#ACE2E1] px-4 py-1 rounded-lg' onClick={handleAddBtn}>Add</button>
                    {addBtn && <div className='absolute z-10 mt-2 -ml-7 bg-[#ACE2E1] rounded-lg flex-col overflow-y-scroll scrollbar-hide w-32  max-h-96'>
                        {allNutrients.map(nutrient => <h1 key={nutrient.name} className='flex justify-center my-2 cursor-pointer' onClick={()=>handleAddNutrient(nutrient.name)}>{nutrient.name}</h1>)}
                    </div>}
                </div>
                <button className='bg-[#ACE2E1] px-4 py-1 rounded-lg' onClick={handleRemoveBtn}>Remove</button>
                <button className='bg-[#ACE2E1] px-4 py-1 rounded-lg' onClick={handleSearch}>Search</button>
                {/* <button className='bg-[#ACE2E1] px-4 py-1' onClick={handleClearAll}>Clear All</button> */}
            </div>
            {!recipesInfo && !loading && <div className='absolute ml-[35%]'>
                {allNutrients.map(nutrient => nutrient.isVisible && <div className='flex my-4'>
                    <h1 className='text-lg'>{nutrient.name}</h1>
                    <input type='number' placeholder='min' onChange={(e)=>handleMinValChange(e.target.value,nutrient.name)} value={nutrient.minVal} className='bg-gray-200 w-20 absolute ml-28'/>
                    <input type='number' placeholder='max' onChange={(e)=>handleMaxValChange(e.target.value,nutrient.name)} value={nutrient.maxVal} className='bg-gray-200 w-20 absolute ml-52'/>
                    {removeBtn && <img src={DeleteLogo} alt='delte logo' onClick={()=>{handleRemoveNutrient(nutrient.name)}} className='w-5 cursor-pointer absolute ml-[19rem]'/>}
                </div>)}
            </div>}
            {loading ? <Shimmer/> : <div className='flex flex-wrap justify-center'>
                {recipesInfo && recipesInfo.map(recipe => <RecipeCard recipe={recipe}/>)}
            </div>}
        </div>
    )
}

export default Nutrients;

// [
//     {
//         "id": 634927,
//         "title": "Best Potato Cheese Soup in a bread bowl",
//         "image": "https://spoonacular.com/recipeImages/634927-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 750,
//         "protein": "26g",
//         "fat": "45g",
//         "carbs": "58g"
//     },
//     {
//         "id": 640509,
//         "title": "Cream Cheese Stuffed Chicken Breasts",
//         "image": "https://spoonacular.com/recipeImages/640509-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 434,
//         "protein": "30g",
//         "fat": "32g",
//         "carbs": "6g"
//     },
//     {
//         "id": 643514,
//         "title": "Fresh Herb Omelette",
//         "image": "https://spoonacular.com/recipeImages/643514-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 317,
//         "protein": "17g",
//         "fat": "26g",
//         "carbs": "4g"
//     },
//     {
//         "id": 651994,
//         "title": "Miniature Fruit Tarts",
//         "image": "https://spoonacular.com/recipeImages/651994-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 482,
//         "protein": "15g",
//         "fat": "7g",
//         "carbs": "89g"
//     },
//     {
//         "id": 654571,
//         "title": "Panna Cotta with Raspberry and Orange Sauce",
//         "image": "https://spoonacular.com/recipeImages/654571-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 396,
//         "protein": "8g",
//         "fat": "27g",
//         "carbs": "28g"
//     },
//     {
//         "id": 657972,
//         "title": "Raw Chocolate Energy Bars",
//         "image": "https://spoonacular.com/recipeImages/657972-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 190,
//         "protein": "6g",
//         "fat": "10g",
//         "carbs": "20g"
//     },
//     {
//         "id": 658004,
//         "title": "Raw Vegan Blueberry Chocolate Crust \"Cheesecake",
//         "image": "https://spoonacular.com/recipeImages/658004-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 557,
//         "protein": "9g",
//         "fat": "36g",
//         "carbs": "59g"
//     },
//     {
//         "id": 715397,
//         "title": "Cheesy Chicken and Rice Casserole",
//         "image": "https://spoonacular.com/recipeImages/715397-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 464,
//         "protein": "31g",
//         "fat": "28g",
//         "carbs": "21g"
//     },
//     {
//         "id": 1459207,
//         "title": "Easy Sheet Pan Pancakes",
//         "image": "https://spoonacular.com/recipeImages/1459207-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 218,
//         "protein": "6g",
//         "fat": "8g",
//         "carbs": "28g"
//     },
//     {
//         "id": 1697687,
//         "title": "Spinach Mushroom Omelette with Parmesan",
//         "image": "https://spoonacular.com/recipeImages/1697687-312x231.jpg",
//         "imageType": "jpg",
//         "calories": 237,
//         "protein": "17g",
//         "fat": "17g",
//         "carbs": "4g"
//     }
// ]