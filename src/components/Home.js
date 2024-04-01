import useRandomRecipes from "../hooks/useRandomRecipes";
import Carousel from "./Carousel";
import Footer from "./Footer";
import MainContainer from "./MainContainer";

const Home = () => {

    // useRandomRecipes();

    return (
        <div>
            <Carousel/>
            <MainContainer/>
            <Footer/>
        </div>
    )
}

export default Home;
