import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import Product from "./pages/Product";

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);
