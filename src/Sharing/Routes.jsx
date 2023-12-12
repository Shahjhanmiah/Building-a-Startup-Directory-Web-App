import {
    createBrowserRouter,
   
  } from "react-router-dom";
 
import Main from "./Main";
import Industry from "../Compnent/Industry/Industry";
import IndustryClick from "../Compnent/Industry/IndustryClick";
  
  const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'',
                element:<Industry></Industry>

            },
            
              {
                path:'/allIndusrty/:id',
                loader: ({params}) => fetch(`http://localhost:5000/Startup/${params.id}`),
                element:<IndustryClick></IndustryClick>
               
              },
            
        ]
    },

    
  ]);

  export default router
  