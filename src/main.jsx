import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";

import Login from "./Pages/Login";
import Register from "./Components/Rigister";
// import ShowProduct from "./Pages/ShowProduct";
import AuthProvider from "./AuthProvider/AuthProver";
import SmartPhones from "./Components/SmartPhone";
import Computer from "./Components/Computer";
import Tv from "./Components/Tv";

import Watch from "./Components/Watch";
import Camera from "./Components/Camera";
import HeadPhone from "./Components/HeadPhone";
import AddProduct from "./Pages/AddProductCard";
import UpdateProduct from "./Pages/UpdateProduct";
import Details from "./Pages/Details";
import PrivateRoute from "./Route/PrivateRoute";
import MyCart from "./Pages/MyCart";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

  //     {
  //       path: "/aboutus",
  //       element: <AboutUs></AboutUs>
  //     },

  //     {
  //       path: "/Contact",
  //       element: <Contact></Contact>
  //     },
  //     {
  //       path: "/addcard",
  //       element:<PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
  //     },
    
  //     {
  //       path: "/login",
  //       element: <Login></Login>
  //     },
  //     {
  //       path: "/register",
  //       element: <Register></Register>
  //     },
  //     {
  //       path:'/AddCart',
  //       element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
  //       loader: () => fetch('https://assignment-pc9evlxgh-md-armans-projects-bf1c950b.vercel.app/AddCart')
    
  //     },
  //     {
  //       path: "/Brand/Smartphones",
  //       element: <SmartPhones></SmartPhones>,
  //    loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
  //            },
  //     {
  //       path: "/Brand/Computer",
  //       element: <Computer></Computer>,
  //    loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
  //            },
  //     {
  //       path: "/Brand/Tv",
  //       element: <Tv></Tv>,
  //    loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
  //            },
  //     {
  //       path: "/Brand/Watch",
  //       element: <Watch></Watch>,
  //    loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
  //            },
  //     {
  //       path: "/Brand/HeadPhone",
  //       element: <HeadPhone></HeadPhone>,
  //    loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
  //            },
  //     {
  //       path: "/Brand/Camera",
  //       element: <Camera></Camera>,
  //    loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
  //            },
  //  {
  //   path:'/UpdateProduct/:id',
  //   element:<PrivateRoute><UpdateProduct></UpdateProduct>
  //   </PrivateRoute>,
  //   loader:({params}) => fetch(`https://assignment-otikipoul-md-armans-projects-bf1c950b.vercel.app/AddProduct/${params.id}`)
  //  },
  //   {
  //     path:'/DetailsProduct/:id',
  //     element:<PrivateRoute><Details></Details></PrivateRoute>,
  //     loader:({params}) => fetch(`https://assignment-otikipoul-md-armans-projects-bf1c950b.vercel.app/AddProduct/${params.id}`)
  //   }
  //    ,
  //   {
path:'/AddCart',
element:<Details></Details>
    }
      // {
      //   path: "/",
      //   element: <ShowProductCard></ShowProductCard>,
      //   loader: () => fetch('https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct')
      // },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>   <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
