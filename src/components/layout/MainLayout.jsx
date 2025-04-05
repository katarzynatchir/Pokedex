import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center p-12 w-full ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
