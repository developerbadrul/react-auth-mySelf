import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";


// const [currentUser, setCurrentUser] = useState({});

// const handleCurrentUser = getUser =>{
//   setCurrentUser(getUser)
// }

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
        {
            path:"/dashboard",
            element: <Dashboard></Dashboard>
        },
      ]
    },
  ]);

export default myRoute;