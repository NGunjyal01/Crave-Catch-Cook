import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidDish } from "react-icons/bi";
import { IoMdAlarm } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CarouselItem = ({recipe}) => {

    const {id,title,readyInMinutes,servings,image,summary,aggregateLikes,pricePerServing,cuisines,dishTypes} = recipe;

    const navigate = useNavigate();

    const handleViewRecipe = ()=>{
        navigate("/recipe/"+id);
    }

    return (
        <div className="bg-[#ACE2E1] w-[87%] sm:w-[93%] h-[35rem] rounded-[2rem] sm:rounded-[4rem] shadow-md shadow-gray-400 
        transition-transform duration-500 ease-in-out sm:grid sm:grid-cols-12">
            <img src={image} alt={title+" img"} className="block sm:hidden w-full rounded-t-[2rem]"/>
            <div className="col-span-full sm:col-span-7 flex flex-col sm:w-full sm:py-10 sm:pl-10 sm:pr-5">
                <div className="mt-3 sm:mt-5 lg:mt-0 mx-2 sm:mx-5 lg:mx-0 h-40 sm:h-[21rem] overflow-hidden">
                    <h1 className="text-sm sm:text-lg lg:text-4xl font-bold sm:w-[90%]">{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: summary }} className="mt-2 lg:mt-7 text-[0.5rem] sm:text-xs lg:text-sm text-gray-800"/>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-full sm:col-span-6 grid grid-cols-2 place-items-center">
                        <div className='col-span-1 flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                            <BiSolidDish className="Logos"/>
                            <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{servings + " servings"}</h1>
                        </div>
                        <div className='col-span-1 flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                            <IoMdAlarm className="Logos"/>
                            <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{readyInMinutes+" min"}</h1>
                        </div>
                        <div className='col-span-1 flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                            <AiFillDollarCircle className="Logos"/>
                            <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{"$ "+pricePerServing}</h1>
                        </div>
                        <div  className='col-span-1 flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                            <FaThumbsUp className="Logos"/>
                            <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{aggregateLikes + " likes"}</h1>
                        </div>
                    </div>
                    <div className="col-span-full sm:col-span-3 flex justify-center items-center mt-5">
                        <button className="bg-[#008DDA] text-white rounded-lg sm:rounded-2xl w-32 sm:w-40 flex justify-center items-center gap-1.5 sm:gap-3 py-2 sm:py-4 text-sm sm:text-lg lg:hover:scale-105 transition-transform ease-in-out" 
                        onClick={handleViewRecipe}>
                            View Recipe 
                            <IoPlayCircleOutline size={20}/>
                        </button>
                    </div>
                </div>
            </div>
            <img src={image} alt={title+" img"} className="col-span-5 hidden lg:block rounded-r-[4rem] w-full h-[35rem]"/>
        </div>
    )
}

export default CarouselItem
