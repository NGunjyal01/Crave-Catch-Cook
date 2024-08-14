import { useEffect } from "react";
import Carousel from "./Carousel";
import MainContainer from "./MainContainer";
import { getRandomRecipes } from "../services/apis";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./common/Shimmer";

const Home = () => {

    const randomRecipes = useSelector(store => store.recipes.randomRecipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        !randomRecipes.length && getRandomRecipes(dispatch);
    },[]);

    return (
        <>
            {!randomRecipes.length ? <Shimmer type={"Home"}/>
            :<>
                <Carousel/>
                <MainContainer/>
            </>}
        </>
    )
}

export default Home;
