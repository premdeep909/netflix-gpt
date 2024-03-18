
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Header from "./Header";



const Body = () =>{
    
    
    const appRouter = createBrowserRouter([
        {
            path :"/",
            element: <Login />
        },
        {
            path :"/Browse",
            element: <Browse />
        },
    ])
   
    return (
       <div>
       <RouterProvider router={appRouter} />
       </div>
    )
}
export default Body;