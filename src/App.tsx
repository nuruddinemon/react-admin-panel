import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../src/styles/global.scss";

import Home from "./pages/home/Home";
import Users from "./pages/users/users";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Page404 from "./components/404page/Page404";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>  
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/react-admin-panel/",
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/react-admin-panel/",
          element: <Home />,
        },
        {
          path: "/react-admin-panel/users",
          element: <Users />,
        },
        {
          path: "/react-admin-panel/products",
          element: <Products />,
        },
        {
          path: "/react-admin-panel/users/:id",
          element: <User />,
        },
        {
          path: "/react-admin-panel/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/react-admin-panel/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
