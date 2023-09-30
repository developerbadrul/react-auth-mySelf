import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const myRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:"/",
            element: <div>daynamic route</div>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/order",
            element: <div>order</div>
        },
      ]
    },
  ]);

export default myRoute;