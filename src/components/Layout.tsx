import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <div className="font-kumbh max-w-screen-2xl min-w-xs lg:mx-auto">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
