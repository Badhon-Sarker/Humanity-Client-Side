import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import Root from "./Routes/Root/Root.jsx";
import Home from "./Routes/Home/Home.jsx";
import Login from "./Routes/Login/Login.jsx";
import Register from "./Routes/Register/Register.jsx";
import NeedVolunteer from "./Routes/NeedVolunteer/NeedVolunteer.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import AddVolunteer from "./Routes/AddVolunteer/AddVolunteer.jsx";
import Details from "./Routes/Details/Details.jsx";
import BeVolunteer from "./Routes/BeVolunteer/BeVolunteer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/addVolunteer",
        element: <AddVolunteer></AddVolunteer>,
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/beVolunteer/:id',
        element: <BeVolunteer></BeVolunteer>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
