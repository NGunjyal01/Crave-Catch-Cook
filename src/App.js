import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Body from './components/Body';
import Home from "./components/Home";

function App() {

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Body/>}>
        <Route path='' element={<Home/>}>

        </Route>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
