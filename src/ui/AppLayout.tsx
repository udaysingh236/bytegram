import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="mx-auto grid h-dvh max-w-md grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-y-scroll">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
