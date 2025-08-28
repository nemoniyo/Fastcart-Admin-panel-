import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import LogIn from './pages/logIn';
import Dashboard from './pages/dashboard';

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
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
