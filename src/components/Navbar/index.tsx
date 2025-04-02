import { useAsideStore } from '@/store/useAsideStore';
import { Breadcrumbs, IconButton } from '@/components';
import {
  CloseSidebarIcon,
  HelpCircleIcon,
  InternetCircleIcon,
  NotificationIcon,
} from '../Icons';
import './index.scss';

export const Navbar = () => {
  const { open, isOpen } = useAsideStore();
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <IconButton
          icon={<CloseSidebarIcon />}
          onClick={() => open(1)}
          style={{ display: `${isOpen[1] ? 'none' : ''}` }}
        />

        <Breadcrumbs />
      </div>
      <div className="navbar__icon-buttons">
        <IconButton icon={<HelpCircleIcon />} />
        <IconButton icon={<NotificationIcon />} />
        <IconButton icon={<InternetCircleIcon />} />
        <IconButton icon={<HelpCircleIcon />} />
      </div>
    </nav>
  );
};
