import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

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
            element: <div>login soon</div>
        },
        {
            path:"/register",
            element: <div>register</div>
        },
        {
            path:"/order",
            element: <div>order</div>
        },
      ]
    },
  ]);

export default myRoute;