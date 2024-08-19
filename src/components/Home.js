import { useEffect } from "react";
import Carousel from "./Carousel";
import MainContainer from "./MainContainer";
import { getRandomRecipes } from "../services/apis";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./common/Shimmer";
import { getFavRecipes } from "../services/DBAPI";

const Home = () => {

    const randomRecipes = useSelector(store => store.recipes.randomRecipes);
    const favRecipes = useSelector(store => store.favRecipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        !randomRecipes.length && getRandomRecipes(dispatch);
        !favRecipes && getFavRecipes(dispatch);
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
