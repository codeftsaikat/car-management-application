import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import Services from "../pages/home/services/Services";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Checkout from "../pages/checkout/Checkout";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/services',
            element:<Services></Services>,
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
            loader:({params})=>fetch(`https://car-management-server-three.vercel.app/checkout/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/bookings',
            element:<PrivateRoutes><Bookings/></PrivateRoutes>
        }
      ]
    },
  ]);
  export default router;