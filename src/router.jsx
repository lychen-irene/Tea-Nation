import { createHashRouter } from "react-router";
// react router

import FrontendLayout from "./Layouts/FrontendLayout";
import AdminLayout from "./Layouts/AdminLayout";
// Layouts

import Home from "./pages/front/Home";
import About from "./pages/front/About";
import Tea from "./pages/front/Tea";
import SingleProduct from "./pages/front/SingleProduct";
import Cart from "./pages/front/Cart";
// Frontend pages

import Dashboard from "./pages/admin/Dashboard";
import ProductManage from "./pages/admin/ProductManage";

import NotFound from "./pages/front/NotFound";
// 404 page

export const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true, // 預設首頁
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "tea",
        element: <Tea />,
      },
      {
        path: "product/:id", // 動態參數
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // 預設首頁
        element: <Dashboard />,
      },
      {
        path: "productmanage",
        element: <ProductManage />,
      },
    ],
  },
  {
    path: "*", // 404 頁面
    element: <NotFound />,
  },
]);
