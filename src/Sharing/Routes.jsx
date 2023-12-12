import {
    createBrowserRouter,
   
  } from "react-router-dom";
 
import Main from "./Main";
import Industry from "../Compnent/Industry/Industry";
import IndustryClick from "../Compnent/Industry/IndustryClick";
import Addusger from "../Compnent/Industry/Addusger";
import Addalluser from "../Compnent/Industry/Addalluser";
  
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
              {
                path:'/adduser',
                element:<Addusger></Addusger>
              },
              {
                path:'/',
                element:<Addalluser></Addalluser>
              }
              
            
        ]
    },

    
  ]);

  export default router
  