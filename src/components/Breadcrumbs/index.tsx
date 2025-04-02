import { Link, useLocation } from 'react-router-dom';
import './index.scss';

const translatePath = (path: string): string => {
  const translations: Record<string, string> = {
    calendar: 'Календарь',
    'my-documents': 'Мои документы',
    messages: 'Сообщения',
    sent: 'Отправленные',
    'on-execution': 'На исполнение',
    'for-review': 'Для ознакомления',
  };

  return translations[path] || path;
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const lastBreadcrumb = pathnames[pathnames.length - 1];

  return (
    <nav className="breadcrumbs">
      <Link to="/" className={pathnames.length === 0 ? 'active' : ''}>
        Главная
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = value === lastBreadcrumb;

        return isLast ? (
          <span key={to} className="breadcrumb-last">
            {translatePath(value)}
          </span>
        ) : (
          <Link key={to} to={to} className="breadcrumb-link">
            {translatePath(value)}
          </Link>
        );
      })}
    </nav>
  );
};
