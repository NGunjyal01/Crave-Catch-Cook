import { useSelector } from "react-redux";
import CarouselItem from "./CarouselItem";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import HomeShimmer from "./HomeShimmer";

const Carousel = () => {

    const randomRecipes = useSelector(store => store.recipes.randomRecipes);

    const [currentIndex,setCurrentIndex] = useState(0);
    
    const prevSlide = ()=>{
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? randomRecipes.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = ()=>{
        const lastSlide = currentIndex === randomRecipes.length-1;
        const newIndex = lastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    };

    useEffect(()=>{
        const slider = setTimeout(()=>{
            setCurrentIndex(currentIndex===14?0:currentIndex+1);
        },10000);

        return ()=>{
            clearTimeout(slider);
        }
    },[currentIndex]);

    if(!randomRecipes)  return <HomeShimmer/>;
    return (
        <div className="mt-[28%] sm:mt-[13%] lg:mt-[10%]">
            <div className="absolute top-[55%] sm:max-lg:top-[40%] -left-2 sm:left-0 lg:left-4 cursor-pointer">
                <BsChevronCompactLeft size={35} onClick={prevSlide}/>
            </div>
            <CarouselItem recipe={randomRecipes[currentIndex]}/>
            <div className="absolute top-[55%] sm:max-lg:top-[40%] -right-2 sm:right-0 lg:right-4 cursor-pointer">
                <BsChevronCompactRight size={35} onClick={nextSlide}/>
            </div>
        </div>
    )
}

export default Carousel



