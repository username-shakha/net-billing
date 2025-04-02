import { Outlet } from 'react-router-dom';
import { Sidebar, Navbar } from '@/components';
import './index.scss';

export const Layout = () => (
  <div className="layout">
    <Sidebar />
    <main className="layout__content">
      <Navbar />
      <Outlet />
    </main>
  </div>
);
