import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Body from './components/Body';
import Home from "./components/Home";
import YourAccount from './components/YourAccount';
import DishName from './components/DishName';
import Ingredients from './components/Ingredients';
import Nutrients from './components/Nutrients';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import RecipePage from './components/RecipePage';
import Favourites from './components/Favourites';
import { Toaster } from 'react-hot-toast';
import Recipes from './components/Recipes';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';

function App() {

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Body/>}>
        <Route index element={<Home/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/recipes' element={<Recipes/>}>
          <Route index element={<DishName/>}/>
          <Route path='ingredients' element={<Ingredients/>}/>
          <Route path='nutrients' element={<Nutrients/>}/>
        </Route>
        <Route path='recipe/:id' element={<RecipePage/>}/>
        <Route path='favourites' element={<Favourites/>}/>
        <Route path='yourAccount' element={<YourAccount/>}/>
      </Route>
    )
  )
  
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
      <Toaster/>
    </Provider>
  );
}

export default App;
