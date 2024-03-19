import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Body from './components/Body';
import Home from "./components/Home";
import YourRecipes from './components/YourRecipes';
import YourAccount from './components/YourAccount';
import DishName from './components/DishName';
import Ingredients from './components/Ingredients';
import Nutrients from './components/Nutrients';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import RecipePage from './components/RecipePage';

function App() {

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Body/>}>
        <Route path='' element={<Home/>}>
          <Route path='' element={<DishName/>}/>
          <Route path='ingredients' element={<Ingredients/>}/>
          <Route path='nutrients' element={<Nutrients/>}/>
        </Route>
        <Route path='recipe/:id' element={<RecipePage/>}/>
        <Route path='yourRecipes' element={<YourRecipes/>}/>
        <Route path='yourAccount' element={<YourAccount/>}/>
      </Route>
    )
  )
  
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
