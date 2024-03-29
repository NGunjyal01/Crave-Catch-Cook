import useRandomRecipes from "../hooks/useRandomRecipes";
import Carousel from "./Carousel";

const Home = () => {

    useRandomRecipes();

    return (
        <div>
            <Carousel/>
        </div>
    )
}

export default Home;
