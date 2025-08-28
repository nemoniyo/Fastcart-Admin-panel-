import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import LogIn from './pages/logIn';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <LogIn />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
