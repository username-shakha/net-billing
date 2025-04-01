import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';

const translatePath = (path: string): string => {
  const translations: Record<string, string> = {
    calendar: 'Календарь',
    dashboard: 'Панель управления',
    settings: 'Настройки',
    profile: 'Профиль',
    // Добавьте другие переводы по необходимости
  };

  return translations[path] || path;
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="breadcrumbs">
      {pathnames.length === 0 ? (
        <Link to="/" className="active">
          Главная
        </Link>
      ) : (
        <Link to="/">Главная</Link>
      )}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <Link key={to} to={to} className={index - 1 ? 'isactive' : ''}>
            {translatePath(value)}
          </Link>
        );
      })}
    </nav>
  );
};
// нужно переписать
