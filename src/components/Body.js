import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Body = () => {

    const apiLimitExceed = useSelector(store => store.user.apiLimitExceed);

    return (
        <>
            {apiLimitExceed ?
            <div className="text-3xl font-bold flex justify-center mt-[70%] lg:mt-[20%]">
                API Limit Exceeded
            </div>
            :<>
                <Header/>
                <Outlet/>
                <Footer/>
                <ScrollRestoration/>
            </>}
        </>
    )
}

export default Body
