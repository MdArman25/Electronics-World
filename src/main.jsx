import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import AddCard from "./Pages/AddCard";
import Login from "./Pages/Login";
import Register from "./Components/Rigister";
// import ShowProduct from "./Pages/ShowProduct";
import AuthProvider from "./AuthProvider/AuthProver";
import UpdateProduct from "./Components/UpdateProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/addcard",
        element: <AddCard></AddCard>
      },
    
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/Update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader:({params}) => fetch(`https://assignment-njaqjo60c-md-armans-projects-bf1c950b.vercel.app/AddProduct/${params.id}`)
       
      },
     
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
