import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../components/subpages/Home';
import Register from '../components/subpages/Register';
import Login from '../components/subpages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      // tutaj dodać kolejne trasy: arena, favourites, edition itd.
    ],
  },
]);

export { router };
