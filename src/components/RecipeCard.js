import { BiSolidDish } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FavouriteBtn from "./common/FavouriteBtn";


const RecipeCard = ({recipe}) => {

    const {id,title,servings,readyInMinutes,aggregateLikes,image,nutrition} = recipe;
    const {nutrients} = nutrition;
    const selectedNutrients = nutrients.filter(nutrient => ["Protein","Fat","Sugar"].includes(nutrient.name));

    const navigate = useNavigate();

    const handleRecipeCardClick = ()=>{
        navigate("/recipe/"+id);
    }

    return (
        <div className="bg-[#ACE2E1] m-4 w-[90%] h-[21rem] lg:h-[28rem] 
        rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem] cursor-pointer shadow-md shadow-gray-300 relative"
        onClick={handleRecipeCardClick}>
            <div className="absolute right-3 top-5 z-10"><FavouriteBtn recipe_info={recipe}/></div>
            <img src={image} alt={title+" image"} className="w-full h-[52%] sm:h-[50%] lg:h-[55%] rounded-t-3xl sm:rounded-t-[2rem] lg:rounded-t-[2.5rem] object-cover"/>
            <div className="flex flex-col items-center mt-2 lg:mt-3 w-full">
                <h1 className="text-sm sm:text-base lg:text-lg font-bold mx-2">{title}</h1>
                <ul className="mt-4 ml-2 lg:ml-5 grid grid-cols-3 font-medium w-full text-xs sm:text-[0.8rem] lg:text-base">
                    <li className="col-span-1 my-1 flex justify-center mx-1"><BiSolidDish className="Logos sm:max-lg:-mt-1 mr-1"/>{servings + ' servings'}</li>
                    <li className="col-span-1 my-1 flex justify-center mx-1"><IoMdAlarm size={20} className="Logos lg:mt-1 mr-1"/>{readyInMinutes +"mins"}</li>
                    <li className="col-span-1 my-1 flex justify-center mx-1"><FaThumbsUp size={15} className="Logos lg:mt-1 mr-1"/>{aggregateLikes+" likes"}</li>
                    <li className="col-span-1 my-1 flex justify-center mx-1">{"Carbs " + nutrients[3].amount+" "+nutrients[3].unit}</li>
                    <li className="col-span-1 my-1 flex justify-center mx-1">{nutrients[0].amount + " " + nutrients[0].unit}</li>
                    {selectedNutrients.map(nutrient => <li key={nutrient.name} className="col-span-1 my-1 flex justify-center mx-1">{nutrient.name + " " + nutrient.amount+nutrient.unit}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default RecipeCard;
