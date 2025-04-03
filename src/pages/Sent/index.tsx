import { Outlet } from 'react-router-dom';
import './index.scss';
export const Sent = () => (
  <>
    <h1 className="sent">Sent</h1>
    <Outlet />
  </>
);
