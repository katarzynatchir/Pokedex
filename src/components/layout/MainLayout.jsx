import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-700 text-black dark:text-neutral-50">
      <Header />
      <main className="flex flex-col items-center p-12 w-full ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
