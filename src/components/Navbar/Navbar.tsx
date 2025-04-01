import { Breadcrumbs, IconButton } from '@/components';
import { HelpCircleIcon, InternetCircleIcon, NotificationIcon } from '../Icons';

import './Navbar.scss';

export const Navbar = () => (
  <nav className="navbar">
    <Breadcrumbs />
    <div className="navbar__icon-buttons">
      <IconButton icon={<HelpCircleIcon />} />
      <IconButton icon={<NotificationIcon />} />
      <IconButton icon={<InternetCircleIcon />} />
      <IconButton icon={<HelpCircleIcon />} />
    </div>
  </nav>
);
