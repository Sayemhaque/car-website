import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cars from "../pages/Home/cars/Cars";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Cars/>
            },
            {
                path:"page/:page",
                element:<Cars/>
            }
        ]
    }
])