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
import MyPost from "./Routes/MyPost/MyPost.jsx";
import MyVolunteerReq from "./Routes/MyVolunteerReq/MyVolunteerReq.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import { HelmetProvider } from "react-helmet-async";

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
        element: (
          <PrivateRoute>
            <NeedVolunteer></NeedVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/addVolunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/beVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeVolunteer></BeVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/myVolunteerReq",
        element: (
          <PrivateRoute>
            <MyVolunteerReq></MyVolunteerReq>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);
