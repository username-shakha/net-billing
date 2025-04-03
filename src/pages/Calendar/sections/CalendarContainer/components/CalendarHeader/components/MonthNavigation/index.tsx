import './index.scss';

interface MonthNavigationProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const MonthNavigation = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: MonthNavigationProps) => {
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <>
      <button onClick={onPrevMonth} className="nav-button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <span className="current-month">
        {monthNames[month]}, {year}
      </span>
      <button onClick={onNextMonth} className="nav-button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </>
  );
};
