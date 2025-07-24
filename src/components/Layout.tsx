import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <div className="font-kumbh mx-auto max-w-screen-xl px-4">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
