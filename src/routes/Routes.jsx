import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import Services from "../pages/home/services/Services";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

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
            element:<Services></Services>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
  ]);
  export default router;