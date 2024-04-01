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
        <div className="flex bg-[#ACE2E1] w-[95%] h-[35rem] ml-[2.5%] rounded-[2rem] sm:rounded-[4rem] transition-transform duration-500 ease-in-out" >
            <div className="sm:mt-14 sm:ml-10 sm:px-0">
                <img src={image} alt={title+" img"} className="block sm:hidden rounded-t-[2rem] w-full"/>
                <h1 className="text-lg sm:text-4xl font-bold sm:w-[80%]">{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: summary }} className="sm:w-[80%] mt-5 sm:mt-7 text-[0.5rem] sm:text-sm text-gray-800"/>
                <div className="absolute top-[48%] sm:top-[70%] ml-5 sm:ml-0 flex flex-wrap max-w-[20rem]">
                    <div className='flex justify-between bg-[#41C9E2] sm:w-36 w-24 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg sm:rounded-full shadow-sm mt-4 mr-4'>
                        <BiSolidDish className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{servings + " servings"}</h1>
                    </div>
                    <div className='flex justify-between bg-[#41C9E2] sm:w-36 w-24 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg sm:rounded-full shadow-sm mt-4 mr-4'>
                        <IoMdAlarm className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{readyInMinutes+" min"}</h1>
                    </div>
                    <div className='flex justify-between bg-[#41C9E2] sm:w-36 w-24 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg sm:rounded-full shadow-sm mt-4 mr-4'>
                        <AiFillDollarCircle className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{"$ "+pricePerServing}</h1>
                    </div>
                    <div  className='flex justify-between bg-[#41C9E2] sm:w-36 w-24 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg sm:rounded-full shadow-sm mt-4 mr-4'>
                        <FaThumbsUp className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{aggregateLikes + " likes"}</h1>
                    </div>
                </div>
                <button className="bg-[#008DDA] text-white rounded-2xl w-40 h-14 flex pl-5 py-4 text-lg absolute top-[62%] sm:top-[75%] left-[22%] sm:left-[30%] sm:hover:scale-105" onClick={handleViewRecipe}>
                    View Recipe 
                    <span className="text-black"><IoPlayCircleOutline size={20} className="mt-1 ml-2"/></span>
                </button>
            </div>  
            <img src={image} alt={title+" img"} className="hidden sm:block rounded-r-[4rem] w-[45%]"/>
        </div>
    )
}

export default CarouselItem
