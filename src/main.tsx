import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import About from "./pages/About/About.tsx";
import ErrorPage from "./pages/Error/ErrorPage.tsx";
import Home from './pages/Home/Home.tsx'
import Layout from "./components/Layout/Layout.tsx";

import './index.css'

const routes = createBrowserRouter([{
    path: "/",
    errorElement: <ErrorPage/>,
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "about",
            element: <About/>
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>,
)
