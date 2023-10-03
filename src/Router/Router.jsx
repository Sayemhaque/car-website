import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cars from "../pages/Home/cars/Cars";
import SearchItems from "../pages/SearchItems/SearchItems";
import RentCars from "../components/Rent/RentCars";
import FavouriteCars from "../components/Favourite/FavouriteCars";
import NotFoundPage from "../components/NotFound/NotFoundPage";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                index:true,
                element:<Cars/>
            },
            {
                path:"page/:page",
                element:<Cars/>
            },
            {
                path:"search/:searchText",
                element:<SearchItems/>
            },
            {
                path:"rent",
                element:<RentCars/>
            },
            {
                path:"favourite",
                element:<FavouriteCars/>
            }
        ]
    }
])