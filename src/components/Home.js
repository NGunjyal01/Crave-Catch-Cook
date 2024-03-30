import useRandomRecipes from "../hooks/useRandomRecipes";
import Carousel from "./Carousel";
import MainContainer from "./MainContainer";

const Home = () => {

    useRandomRecipes();

    return (
        <div>
            <Carousel/>
            <MainContainer/>
        </div>
    )
}

export default Home;
