import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@/components/Icons';
import { IItemsProps } from '@/constants/constants';
import './index.scss';

interface INavLinkProps {
  item: IItemsProps;
  level?: number;
}

const MAX_LEVEL = 3; // Максимальная глубина вложенности

export const NavLinks = ({ item, level = 0 }: INavLinkProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;

  const childrens = item.children;

  const toggleOpen = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <li className="nav-link">
      <Link
        to={item.to}
        className="nav-link__item"
        onClick={hasChildren ? toggleOpen : undefined}
      >
        {item.icon}
        <span className="nav-link__label">{item.label}</span>
        {hasChildren && (
          <span className={`nav-link__arrow ${isOpen ? '' : 'rotate'}`}>
            <ChevronDownIcon />
          </span>
        )}
      </Link>

      {isOpen && level < MAX_LEVEL && (
        <ul className="nav-link__children">
          {childrens &&
            childrens.length > 0 &&
            childrens.map((child) => (
              <NavLinks item={child} key={child.to} level={level + 1} />
            ))}
        </ul>
      )}
    </li>
  );
};
