import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../components/subpages/Home';
import Register from '../components/subpages/Register';
import Login from '../components/subpages/Login';
import Arena from '../components/subpages/Arena';
import Favourites from '../components/subpages/Favourites';
import Ranking from '../components/subpages/Ranking';
import Edition from '../components/subpages/Edition';

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
      { path: 'arena', element: <Arena /> },
      { path: 'favourites', element: <Favourites /> },
      { path: 'ranking', element: <Ranking /> },
      { path: 'edition', element: <Edition /> },
    ],
  },
]);

export { router };
