// react router
import { createHashRouter } from "react-router-dom";

// Layouts
import FrontendLayout from "./Layouts/FrontendLayout";
import AdminLayout from "./Layouts/AdminLayout";

// Frontend pages(前台)
import Home from "./pages/front/Home";
import About from "./pages/front/About";
import Knowledge from "./pages/front/Knowledge";
import ProductsTeaCan from "./pages/front/ProductsTeaCan";
import ProductsGiftBox from "./pages/front/ProductsGiftBox";
import ProductsTeaSet from "./pages/front/ProductsTeaSet";
import SingleProduct from "./pages/front/SingleProduct";
import Cart from "./pages/front/Cart";
import OderInformation from "./pages/front/OderInformation";
import Login from "./pages/front/Login";
import Register from "./pages/front/Register";

//Admin pages(後台)
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";

// 404 page
import NotFound from "./pages/front/NotFound";

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
        path: "aboutUs",
        element: <About />,
      },
      {
        path: "knowledge",
        element: <Knowledge />,
      },
      {
        path: "productsTeaCan",
        element: <ProductsTeaCan />,
      },
      {
        path: "productsGiftBox",
        element: <ProductsGiftBox />,
      },
      {
        path: "productsTeaSet",
        element: <ProductsTeaSet />,
      },
      {
        path: "product/:id", // 動態參數
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "oderInformation",
        element: <OderInformation />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "orders",
        element: <AdminOrders />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
    ],
  },
  {
    path: "*", // 404 頁面
    element: <NotFound />,
  },
]);
