import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './pages/Home/Home.tsx'
import Layout from "./components/Layout/Layout.tsx";

import './index.css'

const routes = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        path: "/",
        element: <Home />
    }]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
