import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from "./components/Home/HomePage"
import AddProperty from "./components/Add-Property/AddProperty"
import SignUp from './components/SignIn/SingIn';
import Layout from './components/LayOut/Layout';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LogIn from './components/LogIN/LogIN';
import Filter from './components/Filter/Filter';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';






const router =createBrowserRouter([{
    path: "/",
    element:<Layout/>,
    children:[
        {
            path: "",
            element:<HomePage
         
            />
        },

        {
            path: "/add-property",
            element: <AddProperty/>
            
        },
        {
            path: "/sign-up",
            element:<SignUp/>
        },
        {
        path:'/LogIn',
        element :<LogIn/>
        },
        {
            path:"property/:id",
            element:<PropertyDetails/>
        },
        {
            path:"/filter",
            element:<Filter/>

        }


    ]
   
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
<React.StrictMode>

    <RouterProvider router={router} />

</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
