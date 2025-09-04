import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import LogIn from './pages/logIn';
import Dashboard from './pages/dashboard';
import Orders from './pages/orders';
import Products from './pages/products';
import Others from './pages/others';
import Brands from './pages/brands';
import Banners from './pages/banners';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <LogIn />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/others",
          element: <Others />
        },
        {
          path: "/others/brands",
          element: <Brands />
        },
        {
          path: "/others/banners",
          element: <Banners />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
