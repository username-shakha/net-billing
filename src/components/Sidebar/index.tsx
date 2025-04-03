import { useAsideStore } from '@/store/useAsideStore';
import { Aside, Button, IconButton, Logo } from '../';
import { AddCircleIcon, CloseSidebarIcon } from '../Icons';
import { items } from '@/constants/constants';
import { NavLinks } from './components/NavLinks';
import './index.scss';

export const Sidebar = () => {
  const { close, isOpen } = useAsideStore();

  return (
    <Aside className={`aside-left ${isOpen[1] ? '' : 'close'}`}>
      <div className="sidebar">
        <header className="sidebar__header">
          <Logo />
          <IconButton onClick={() => close(1)} icon={<CloseSidebarIcon />} />
        </header>

        <div className="sidebar__actions">
          <Button leftIcon={<AddCircleIcon />}>Регистрация документа</Button>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list">
            {items.map((item) => (
              <NavLinks item={item} key={item.to} />
            ))}
          </ul>
        </nav>
      </div>
    </Aside>
  );
};
