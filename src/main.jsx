import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Sharing/Routes.jsx'
import StartupContext from './Compnent/Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StartupContext>
    <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
   
  </React.StrictMode>,
  </StartupContext>
)
